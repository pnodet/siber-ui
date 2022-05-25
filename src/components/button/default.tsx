import React from 'react';
import {overrideTailwindClasses as twOverride} from 'tailwind-override';
import classnames from 'classnames';
import type {Color} from '../../types/colors';
import {getColors, getSizes} from './utils';

export interface ButtonProps {
	color?: Color;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'primary' | 'secondary' | 'white';
	isDisabled?: boolean;
	isRounded?: boolean;
	type?: React.ButtonHTMLAttributes<any>['type'];
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof ButtonProps>;
export type FullButtonProps = ButtonProps & NativeAttrs;

const defaultProps: Partial<FullButtonProps> = {
	type: 'button' as React.ButtonHTMLAttributes<any>['type'],
	size: 'md',
	color: 'sky',
	variant: 'primary',
	isDisabled: false,
	isRounded: false,
};

const Button = React.forwardRef<
	HTMLButtonElement,
	React.PropsWithChildren<FullButtonProps>
>(
	(
		btnProps: FullButtonProps & typeof defaultProps,
		ref?: React.Ref<HTMLButtonElement>,
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

		const btnSize = getSizes(size);
		const btnColor = getColors(color, variant);
		const b_ = variant === 'white' ? 'border-gray-300' : 'border-transparent';
		const r_ = isRounded ? 'rounded-full' : 'rounded-md';

		const classes = classnames(
			btnSize,
			btnColor,
			b_,
			r_,
			`inline-flex items-center border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:text-white disabled:bg-slate-500`,
		);
		return (
			<button
				ref={ref}
				/* eslint-disable-next-line react/button-has-type */
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
