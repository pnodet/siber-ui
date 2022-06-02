import React, {Dispatch, SetStateAction, useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid';

import type {Color} from '../../types/colors';

type Props = {
	count?: number;
	page?: number;
	onChange?: (number: number) => void;
	limit?: number;
};

type ItemProps = {
	number: number;
	color?: Color;
	current: number;
	setCurrent: Dispatch<SetStateAction<number>>;
	onChange: (number: number) => void;
	limit: number;
	count: number;
};

export const PaginationItem = ({
	number,
	color = 'indigo',
	current,
	setCurrent,
	onChange,
	limit,
	count,
}: ItemProps) => {
	let itemClassName =
		'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 px-4 py-2 ';
	if (number === current)
		itemClassName = `z-10 bg-${color}-50 border-${color}-500 text-${color}-600 px-4 py-2`;
	let Item = (
		<button
			type='button'
			className={itemClassName}
			onClick={() => {
				setCurrent(() => number);
				onChange(number);
			}}
		>
			{number}
		</button>
	);

	if (
		number === 1 ||
		number === count ||
		(number <= 2 && current === number) ||
		(number >= count - 1 && current === number)
	) {
		return Item;
	}

	if (limit >= 3) {
		const _limit = limit % 2 === 0 ? limit - 1 : limit;
		let numberOfItemBeforeCurrent = 0;
		let numberOfItemAfterCurrent = 0;
		const toRepart = _limit - 3;
		if (toRepart >= 0) {
			numberOfItemBeforeCurrent = toRepart / 2;
			numberOfItemAfterCurrent = toRepart / 2;
		}

		const rangeStart =
			current - numberOfItemBeforeCurrent >= 1
				? current - numberOfItemBeforeCurrent
				: 1;
		const rangeEnd =
			current + numberOfItemAfterCurrent <= count
				? current + numberOfItemAfterCurrent
				: count;

		if (rangeStart <= number && rangeEnd >= number) {
			console.log(
				rangeStart,
				rangeEnd,
				number,
				numberOfItemAfterCurrent,
				numberOfItemBeforeCurrent,
			);
			return Item;
		}

		if (number === rangeStart - 1 && number !== 1) {
			Item = (
				<div
					className='flex items-center justify-center w-4 h- px-4 py-2  text-bold cursor-pointer  '
					onClick={() => {
						setCurrent(() => 1);
						onChange(1);
					}}
				>
					...
				</div>
			);
			return Item;
		}

		if (number === rangeEnd + 1 && number !== count) {
			Item = (
				<div
					className='flex items-center justify-center w-4 h- px-4 py-2  text-bold cursor-pointer  '
					onClick={() => {
						setCurrent(() => count);
						onChange(count);
					}}
				>
					...
				</div>
			);
			return Item;
		}
	}

	Item = <div />;

	return Item;
};

const Pagination = ({
	count = 10,
	onChange = number => {
		console.log(number);
	},
	page = 1,
	limit = 4,
}: Props) => {
	const [current, setCurrent] = useState<number>(page);

	return (
		<div className='flex w-full items-center justify-center   bg-white px-4 py-3 sm:px-6'>
			<div className='flex flex-1 justify-between sm:hidden'>
				<button
					type='button'
					className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
					onClick={() => {
						setCurrent(previous => {
							if (previous === 1) return 1;
							return previous - 1;
						});
					}}
				>
					Previous
				</button>
				<button
					type='button'
					className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
					onClick={() => {
						setCurrent(previous => {
							if (previous === count) return count;
							return previous + 1;
						});
					}}
				>
					Next
				</button>
			</div>
			<div className='hidden sm:flex  sm:items-center sm:justify-center '>
				<div>
					<nav
						className='relative z-0 inline-flex -space-x-px rounded-md shadow-sm'
						aria-label='Pagination'
					>
						<button
							type='button'
							className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'
							onClick={() => {
								setCurrent(previous => {
									if (previous === 1) return 1;
									return previous - 1;
								});
							}}
						>
							<span className='sr-only'>Previous</span>
							<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
						</button>
						{/* eslint-disable-next-line unicorn/no-new-array */}
						{[...new Array(count).keys()].map((number, index) => {
							return (
								<PaginationItem
									key={number}
									number={index + 1}
									count={count}
									current={current}
									setCurrent={setCurrent}
									limit={limit}
									onChange={onChange}
								/>
							);
						})}
						<button
							type='button'
							className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'
							onClick={() => {
								setCurrent(previous => {
									if (previous === count) return count;
									return previous + 1;
								});
							}}
						>
							<span className='sr-only'>Next</span>
							<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
};

export {Pagination};
