import React from 'react';
import classnames from 'classnames';
import type {Color} from '../../types/colors';

interface Props {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
	color?: Color;
	size?: 'sm' | 'lg';
	isRounded?: boolean;
}

export const BadgeWithRemove = ({
	onClick,
	children,
	color = 'sky',
	size = 'sm',
	isRounded = true,
}: Props): JSX.Element => {
	let s_ = 'py-0.5 pl-2 pr-0.5 text-xs';
	if (size === 'lg') s_ = 'py-0.5 pl-2.5 pr-1 text-sm';

	let r_ = 'rounded-full';
	if (size === 'sm' && !isRounded) r_ = 'rounded';
	if (size === 'lg' && !isRounded) r_ = 'rounded-md';

	const classes = classnames(
		s_,
		r_,
		'inline-flex items-center font-medium',
		`bg-${color}-100 text-${color}-800`,
	);

	return (
		<span className={classes}>
			{children}
			<button
				type='button'
				className={`ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-${color}-400 hover:bg-${color}-200 hover:text-${color}-500 focus:outline-none focus:bg-${color}-500 focus:text-white`}
				onClick={onClick}
			>
				<span className='sr-only'>Remove option</span>
				<svg
					className='h-2 w-2'
					stroke='currentColor'
					fill='none'
					viewBox='0 0 8 8'
				>
					<path strokeLinecap='round' strokeWidth='1.5' d='M1 1l6 6m0-6L1 7' />
				</svg>
			</button>
		</span>
	);
};
