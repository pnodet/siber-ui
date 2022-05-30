import React from 'react';
import type * as HIcons from '@heroicons/react/solid';
import type {Color} from 'src/types/colors';

interface Props {
	items: Array<{
		id: number;
		content: JSX.Element;
		icon: keyof typeof HIcons;
		iconBackground: Color;
		iconColor: Color;
	}>;
}

export const FeedCustom = ({items}: Props) => {
	return (
		<div className='flow-root'>
			<ul role='list' className='-mb-8'>
				{items.map((item, itemIdx) => {
					return (
						<li key={item.id}>
							<div className='relative pb-8'>
								{itemIdx !== items.length - 1 ? (
									<span
										className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
										aria-hidden='true'
									/>
								) : null}
								<div className='relative flex space-x-3'>{item.content}</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
