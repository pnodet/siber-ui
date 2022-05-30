import React from 'react';
import classnames from 'classnames';
import type {Color} from '../../types/colors';

interface Props {
	children: React.ReactNode;
	color?: Color;
	size?: 'sm' | 'lg';
	isRounded?: boolean;
}

export const BadgeWithDot = ({
	children,
	color = 'sky',
	size = 'sm',
	isRounded = true,
}: Props): JSX.Element => {
	let s_ = 'px-2.5 py-0.5 rounded-full text-xs';
	if (size === 'sm' && !isRounded) s_ = 'px-2 py-0.5 rounded text-xs';
	if (size === 'lg' && !isRounded) s_ = 'px-2.5 py-0.5 rounded-md text-sm';
	if (size === 'lg' && isRounded) s_ = 'px-3 py-0.5 rounded-full text-sm';

	const classes = classnames(
		s_,
		'inline-flex items-center py-0.5 font-medium',
		`bg-${color}-100 text-${color}-800`,
	);

	let d_ = '-ml-0.5 mr-1.5';
	if (size === 'lg' && isRounded) d_ = '-ml-1 mr-1.5';
	if (size === 'sm' && !isRounded) d_ = 'mr-1.5';
	const dotClasses = classnames(d_, `h-2 w-2 text-${color}-400`);

	return (
		<span className={classes}>
			<svg className={dotClasses} fill='currentColor' viewBox='0 0 8 8'>
				<circle cx={4} cy={4} r={3} />
			</svg>
			{children}
		</span>
	);
};
