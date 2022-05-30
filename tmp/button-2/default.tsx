import React from 'react';
import {overrideTailwindClasses as twOverride} from 'tailwind-override';
import classnames from 'classnames';
import type {Color} from '../../types/colors';
import {getColors, getSizes} from './utils';

interface Props {
	color?: Color;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'primary' | 'secondary' | 'white';
	isDisabled?: boolean;
	isRounded?: boolean;
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type ButtonProps = Props & NativeAttrs;

const defaultProps: Partial<ButtonProps> = {
	type: 'button' as React.ButtonHTMLAttributes<any>['type'],
	size: 'md',
	color: 'sky',
	variant: 'primary',
	isDisabled: false,
	isRounded: false,
};

const Button = React.forwardRef<
	HTMLButtonElement,
	React.PropsWithChildren<ButtonProps>
>(
	(
		btnProps: ButtonProps & typeof defaultProps,
		ref: React.Ref<HTMLButtonElement | undefined>,
	): JSX.Element => {
		const {
			children,
			size,
			color,
			type,
			variant,
			isDisabled,
			isRounded,
			className,
			...props
		} = btnProps;

		const buttonRef = React.useRef<HTMLButtonElement>(null);
		React.useImperativeHandle(ref, () => buttonRef.current);

		const btnSize = getSizes(size);
		const btnColor = getColors(color, variant);
		const b_ = variant === 'white' ? 'border-gray-300' : 'border-transparent';
		const r_ = isRounded ? 'rounded-full' : 'rounded-md';

		const classes = classnames(
			btnSize,
			btnColor,
			b_,
			r_,
			`inline-flex items-center border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-500`,
		);
		return (
			<button
				ref={buttonRef}
				type={type}
				disabled={isDisabled}
				className={twOverride(`${classes} ${className}`)}
				{...props}
			>
				{children}
			</button>
		);
	},
);

Button.defaultProps = defaultProps;
export {Button};
