import {overrideTailwindClasses as twOverride} from 'tailwind-override';
import classnames from 'classnames';
import React from 'react';
import type {Color} from 'src/types/colors';
import type {Size} from 'src/types/sizes';

type Props = {
	hasDot?: boolean;
	color?: Color;
	size?: Size;
	isRounded?: boolean;
};

const defaultProps: Props = {
	hasDot: false,
	color: 'sky',
	size: 'md',
	isRounded: true,
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type BadgeProps = Props & NativeAttrs;

const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = ({
	hasDot,
	children,
	size,
	isRounded,
	color,
	className,
	...props
}) => {
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

	return (
		<span className={twOverride(`${classes} ${className}`)} {...props}>
			{children}
		</span>
	);
};

Badge.defaultProps = defaultProps;
Badge.displayName = 'SiberBadge';

export {Badge};
