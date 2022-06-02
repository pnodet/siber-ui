import React from 'react';
import * as HIcons from '@heroicons/react/solid';
import type {Color} from 'src/types/colors';

export interface FeedCustomProps {
	items?: Array<{
		id: number;
		content: JSX.Element;
	}>;
}

const provItems: Array<{
	id: number;
	content: JSX.Element;
}> = [
	{
		id: 1,
		content: (
			<div className='relative flex space-x-3'>
				<div>
					<span className='bg-sky-400 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'>
						<HIcons.AnnotationIcon className='w-10 h-10' aria-hidden='true' />
					</span>
				</div>
				<div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
					<div>
						<p className='text-sm text-gray-500'>Bonsoir Paris</p>
					</div>
				</div>
			</div>
		),
	},
	{
		id: 2,
		content: (
			<div className='relative flex space-x-3'>
				<div>
					<span className='bg-sky-400 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'>
						<HIcons.AnnotationIcon className='w-10 h-10' aria-hidden='true' />
					</span>
				</div>
				<div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
					<div>
						<p className='text-sm text-gray-500'>Bonsoir Paris</p>
					</div>
				</div>
			</div>
		),
	},
	{
		id: 3,
		content: (
			<div className='relative flex space-x-3'>
				<div>
					<span className='bg-sky-400 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'>
						<HIcons.AnnotationIcon className='w-10 h-10' aria-hidden='true' />
					</span>
				</div>
				<div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
					<div>
						<p className='text-sm text-gray-500'>Bonsoir Paris</p>
					</div>
				</div>
			</div>
		),
	},
	{
		id: 4,
		content: (
			<div className='relative flex space-x-3'>
				<div>
					<span className='bg-sky-400 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'>
						<HIcons.AnnotationIcon className='w-10 h-10' aria-hidden='true' />
					</span>
				</div>
				<div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
					<div>
						<p className='text-sm text-gray-500'>Bonsoir Paris</p>
					</div>
				</div>
			</div>
		),
	},
];

export const FeedCustom = ({items = provItems}: FeedCustomProps) => {
	return (
		<div className='flow-root'>
			<ul role='list' className='-mb-8'>
				{items.map((item, itemIdx) => {
					return (
						<li key={item.id}>
							<div className='relative pb-8'>
								{itemIdx === items.length - 1 ? null : (
									<span
										className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
										aria-hidden='true'
									/>
								)}
								<div className='relative flex space-x-3'>{item.content}</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
