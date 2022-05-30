import * as HIcons from '@heroicons/react/solid';
import classNames from 'classnames';
import React from 'react';
import type {Color} from 'src/types/colors';

export interface FeedItem {
	id: number;
	content: string;
	icon: keyof typeof HIcons;
	iconBackground: Color | undefined;
	iconColor: Color | undefined;
}

interface Props {
	items: FeedItem[];
}

export const Feed = ({items}: Props) => {
	return (
		<div className='flow-root'>
			<ul role='list' className='-mb-8'>
				{items.map((item, itemIdx) => {
					const {id, content, icon, iconBackground, iconColor} = item;
					const {...icons} = HIcons;
					const CustomIcon = icons[icon];
					const iconStyle = classNames(
						iconColor && iconColor !== 'white'
							? `text-${iconColor}-400`
							: 'text-white',
						'h-5 w-5 ',
					);
					return (
						<li key={id}>
							<div className='relative pb-8'>
								{itemIdx !== items.length - 1 ? (
									<span
										className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
										aria-hidden='true'
									/>
								) : null}
								<div className='relative flex space-x-3'>
									<div>
										<span
											className={classNames(
												`bg-${iconBackground ? iconBackground : 'sky'}-400`,
												'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
											)}
										>
											<CustomIcon className={iconStyle} aria-hidden='true' />
										</span>
									</div>
									<div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
										<div>
											<p className='text-sm text-gray-500'>{content}</p>
										</div>
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
