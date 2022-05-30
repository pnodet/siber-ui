import React from 'react';
import type {Color} from '../../types/colors';

interface Props {
	items?: string[];
	size?: 'sm' | 'md' | 'lg';
	color?: Color;
}

export const AvatarGroup = ({
	items,
	size = 'md',
	color = 'white',
}: Props): JSX.Element => {
	let space = '2';
	if (size === 'sm') space = '2';

	let avatarSize = 'h-8 w-8';
	if (size === 'sm') avatarSize = 'h-6 w-6';
	if (size === 'lg') avatarSize = 'h-10 w-10';

	return (
		<div className={`flex -space-x-${space} overflow-hidden`}>
			{items.map(link => (
				<img
					className={`inline-block ${avatarSize} rounded-full ring-2 ring-${color}`}
					src={link}
					alt=''
				/>
			))}
		</div>
	);
};
