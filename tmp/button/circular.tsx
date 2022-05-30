import React from 'react';
import classnames from 'classnames';
import {PlusSmIcon as PlusSmIconSolid} from '@heroicons/react/solid';
import {PlusSmIcon as PlusSmIconOutline} from '@heroicons/react/outline';
import type {Color} from '../../types/colors';

interface Props {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
	color?: Color;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	icon?: JSX.Element;
	isDisabled?: boolean;
}

export const CircularButton = ({
	onClick,
	icon,
	size = 'md',
	color = 'sky',
	isDisabled = false,
}: Props): JSX.Element => {
	let s_ = 'p-2';
	if (size === 'xs') s_ = 'p-1';
	if (size === 'sm') s_ = 'p-1.5';
	if (size === 'lg') s_ = 'p-2';
	if (size === 'xl') s_ = 'p-3';

	let icon_ = <PlusSmIconSolid className='h-5 w-5' aria-hidden='true' />;
	if (size === 'lg' || size === 'xl')
		icon_ = <PlusSmIconOutline className='h-6 w-6' aria-hidden='true' />;
	if (icon) icon_ = icon;

	const classes = classnames(
		s_,
		`inline-flex items-center border border-transparent rounded-full shadow-sm text-white bg-${color}-600 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 disabled:cursor-not-allowed disabled:bg-slate-500`,
	);
	return (
		<button
			type='button'
			disabled={isDisabled}
			className={classes}
			onClick={onClick}
		>
			{icon_}
		</button>
	);
};
