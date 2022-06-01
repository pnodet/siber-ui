import React from 'react';
import {getColor} from '../../utils/get-color';
import type {Color} from '../../types/colors';

export interface Props {
	items?: string[];
	size?: 'sm' | 'md' | 'lg';
	color?: Color;
}

const provItems = [
	'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
];

const AvatarGroup = ({
	items = provItems,
	size = 'md',
	color = 'white',
}: Props): JSX.Element => {
	let space = '2';
	if (size === 'sm') space = '2';

	let avatarSize = 'h-8 w-8';
	if (size === 'sm') avatarSize = 'h-6 w-6';
	if (size === 'lg') avatarSize = 'h-10 w-10';

	return (
		<div className={`flex - space - x - ${space} `}>
			{items.map((link, index) => (
				<img
					key={index.toString() + link}
					className={`inline-block ${avatarSize} rounded-full ring-2 ring-${getColor(
						color,
						300,
					)}`}
					src={link}
					alt=''
				/>
			))}
		</div>
	);
};

export {AvatarGroup};
