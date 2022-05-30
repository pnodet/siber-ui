import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import * as HIcons from '@heroicons/react/solid';
import classnames from 'classnames';
import type {Color} from 'src/types/colors';

interface Props {
	title: string;
	color?: Color;
	items: Array<{
		url: string;
		title: string;
		id: number;
		icon?: keyof typeof HIcons;
	}>;
}

export const Dropdown = ({title, color = 'sky', items}: Props): JSX.Element => {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button
					className={`inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
				>
					{title}
					<HIcons.ChevronDownIcon
						className='-mr-1 ml-2 h-5 w-5'
						aria-hidden='true'
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='py-1'>
						{items.map(item => {
							const {...icons} = HIcons;
							const MenuIcon = icons[item.icon];
							return (
								<Menu.Item key={item.id}>
									{({active}) => (
										<a
											href={item.url}
											className={classnames(
												active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												item.icon ? 'group flex' : 'block',
												'px-4 py-2 text-sm',
											)}
										>
											{item.icon && (
												<MenuIcon
													className='mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500'
													aria-hidden='true'
												/>
											)}
											{item.title}
										</a>
									)}
								</Menu.Item>
							);
						})}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};
