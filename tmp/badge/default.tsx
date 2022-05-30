import React from 'react';
import classnames from 'classnames';
import type {Color} from '../../types/colors';

interface Props {
	children: React.ReactNode;
	color?: Color;
	size?: 'sm' | 'lg';
	isRounded?: boolean;
}

export const Badge = ({
	children,
	color = 'sky',
	size = 'sm',
	isRounded = true,
}: Props): JSX.Element => {
	let s_ = 'px-2.5 text-xs';
	if (size === 'lg') s_ = 'px-3 text-sm';

	let r_ = 'rounded-full';
	if (size === 'sm' && !isRounded) r_ = 'rounded';
	if (size === 'lg' && !isRounded) r_ = 'rounded-md';

	const classes = classnames(
		s_,
		r_,
		'inline-flex items-center py-0.5 font-medium',
		`bg-${color}-100 text-${color}-800`,
	);

	return <span className={classes}>{children}</span>;
};
