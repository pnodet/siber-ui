import React from 'react';
import {overrideTailwindClasses as twOverride} from 'tailwind-override';
import {PlusSmIcon as PlusSmIconSolid} from '@heroicons/react/solid';
import {PlusSmIcon as PlusSmIconOutline} from '@heroicons/react/outline';
import classnames from 'classnames';
import type {Color} from '../../types/colors';

export interface CircularButtonProps {
	color?: Color;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	isDisabled?: boolean;
	icon?: JSX.Element;
	type?: React.ButtonHTMLAttributes<any>['type'];
}

type NativeAttrs = Omit<
	React.ButtonHTMLAttributes<any>,
	keyof CircularButtonProps
>;
export type FullCircularButtonProps = CircularButtonProps & NativeAttrs;

const defaultProps: Partial<FullCircularButtonProps> = {
	type: 'button' as React.ButtonHTMLAttributes<any>['type'],
	size: 'md',
	color: 'sky',
	isDisabled: false,
	icon: <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />,
};

const Circular = React.forwardRef<HTMLButtonElement, FullCircularButtonProps>(
	(
		btnProps: FullCircularButtonProps & typeof defaultProps,
		ref?: React.Ref<HTMLButtonElement>,
	): JSX.Element => {
		const {size, color, type, isDisabled, className, icon, ...props} = btnProps;

		let s_ = 'p-2';
		if (size === 'xs') s_ = 'p-1';
		if (size === 'sm') s_ = 'p-1.5';
		if (size === 'lg') s_ = 'p-2';
		if (size === 'xl') s_ = 'p-3';

		const classes = classnames(
			s_,
			`inline-flex items-center border border-transparent rounded-full shadow-sm text-white bg-${color}-600 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 disabled:cursor-not-allowed disabled:bg-slate-500`,
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
				{icon}
			</button>
		);
	},
);

Circular.defaultProps = defaultProps;
export {Circular};
