import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import type {Color} from '../../types/colors';

type Props = {
	count?: number;
	hasDescription?: boolean;
	initialPage?: number;
};

export const PaginationItem = ({
	number,
	color = 'indigo',
	current,
	setCurrent,
}: {
	number: number;
	color?: Color;
	current: number;
	setCurrent: Dispatch<SetStateAction<number>>;
}) => {
	let itemClassName = 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';
	if (number === current)
		itemClassName = `z-10 bg-${color}-50 border-${color}-500 text-${color}-600`;
	return (
		<a
			onClick={() => setCurrent(number => number + 1)}
			href='#'
			className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'
		>
			{number}
		</a>
	);
};

const Pagination = ({
	count = 10,
	hasDescription = true,
	initialPage = 1,
}: Props) => {
	const [current, setCurrent] = useState<number>(1);

	useEffect(() => {
		console.log(current);
	}, [current]);
	return (
		<div className='flex w-full items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
			<div className='flex flex-1 justify-between sm:hidden'>
				<a
					href='#'
					className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
				>
					Previous
				</a>
				<a
					href='#'
					className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
				>
					Next
				</a>
			</div>
			<div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
				<div>
					<p className='text-sm text-gray-700'>
						Showing <span className='font-medium'>1</span> to{' '}
						<span className='font-medium'>10</span> of{' '}
						<span className='font-medium'>{count}</span> results
					</p>
				</div>
				<div>
					<nav
						className='relative z-0 inline-flex -space-x-px rounded-md shadow-sm'
						aria-label='Pagination'
					>
						<a
							href='#'
							className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'
						>
							<span className='sr-only'>Previous</span>
							<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
						</a>
						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
						{Array.from({length: count}).map((item, index) => {
							return (
								<PaginationItem
									number={index + 1}
									current={current}
									setCurrent={setCurrent}
								/>
							);
						})}
						<a
							href='#'
							className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'
						>
							<span className='sr-only'>Next</span>
							<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

Pagination.Item = PaginationItem;
export {Pagination};
