import React from 'react';
import classnames from 'classnames';
import type {Color} from '../../types/colors';

interface Props {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
	color?: Color;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'primary' | 'secondary' | 'white';
	isDisabled?: boolean;
	isRounded?: boolean;
}

export const Button = ({
	onClick,
	children,
	size = 'md',
	color = 'sky',
	variant = 'primary',
	isDisabled = false,
	isRounded = false,
}: Props): JSX.Element => {
	let s_ = 'px-4 py-2 text-sm';
	if (size === 'xs') s_ = 'px-2.5 py-1.5 text-xs';
	if (size === 'sm') s_ = 'px-3 py-2 text-sm leading-4';
	if (size === 'lg') s_ = 'px-4 py-2 text-base';
	if (size === 'xl') s_ = 'px-6 py-3 text-base';

	let c_ = `text-white bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500`;
	if (variant === 'secondary')
		c_ = `text-${color}-700 bg-${color}-100 hover:bg-${color}-200 focus:ring-${color}-500`;
	if (variant === 'white')
		c_ = `text-gray-700 bg-white hover:bg-gray-50 focus:ring-${color}-500`;

	let b_ = 'border-transparent';
	if (variant === 'white') b_ = 'border-gray-300';

	let r_ = 'rounded-md';
	if (isRounded) r_ = 'rounded-full';

	const classes = classnames(
		s_,
		c_,
		b_,
		r_,
		`inline-flex items-center border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-500`,
	);
	return (
		<button
			type='button'
			disabled={isDisabled}
			className={classes}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
