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
	if (size === 'xs') s_ = 'px-3 text-xs';
	if (size === 'sm') s_ = 'px-3 text-sm';
	if (size === 'lg') s_ = 'px-3 text-lg';
	if (size === 'md') s_ = 'px-3 text-md';
	if (size === 'xl') s_ = 'px-3 text-xl';

	let r_ = 'rounded-full';
	if (size === 'xs' && !isRounded) r_ = 'rounded-sm';
	if (size === 'sm' && !isRounded) r_ = 'rounded';
	if (size === 'lg' && !isRounded) r_ = 'rounded-md';
	if (size === 'md' && !isRounded) r_ = 'rounded-lg';
	if (size === 'xl' && !isRounded) r_ = 'rounded-xl';

	const classes = classnames(
		s_,
		r_,
		'inline-flex items-center py-0.5 font-medium',
		`bg-${color}-100 text-${color}-800`,
	);

	let d_ = '-ml-0.5 mr-1.5';
	if (size === 'lg' && isRounded) d_ = '-ml-1 mr-1.5';
	if (size === 'sm' && !isRounded) d_ = 'mr-1.5';
	const dotClasses = classnames(d_, `h-2 w-2 text-${color}-400`);

	return (
		<span className={twOverride(`${classes} ${className}`)} {...props}>
			{hasDot && (
				<svg className={dotClasses} fill='currentColor' viewBox='0 0 8 8'>
					<circle cx={4} cy={4} r={3} />
				</svg>
			)}
			{children}
		</span>
	);
};

Badge.defaultProps = defaultProps;
Badge.displayName = 'SiberBadge';

export {Badge};
