import classnames from 'classnames';
import {overrideTailwindClasses as twOverride} from 'tailwind-override';
import React from 'react';
import {Switch} from '@headlessui/react';
import type {Color} from 'src/types/colors';
import type {Size} from 'src/types/sizes';

type Props = {
	checked?: boolean;
	disabled?: boolean;
	color?: Color;
	size?: Size;
	onChange?: (checked: boolean) => void;
	className?: string;
};

const defaultProps: Props = {
	checked: false,
	disabled: false,
	color: 'sky',
	size: 'md',
	className: '',
};

type NativeAttrs = Omit<React.ElementType, keyof Props>;
export type ToggleProps = Props & NativeAttrs;

const Toggle: React.FC<ToggleProps> = ({
	checked,
	disabled,
	color,
	size,
	onChange,
	className,
	...props
}) => {
	const getContainer = (size: string) => {
		if (size === 'xs') return ' h-4 w-6 ';
		if (size === 'sm') return ' h-5 w-8';
		if (size === 'md') return ' h-6 w-10';
		if (size === 'lg') return ' h-7 w-12';
		if (size === 'xl') return ' h-8 w-14';
	};

	const toggleClasses = classnames(
		checked ? 'bg-gray-200' : `bg-${color}-600`,
		'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
		`focus:ring-${color}-500 disabled:bg-gray-600 disabled:cursor-not-allowed`,
		getContainer(size),
	);

	const getCursorSize = (size: string) => {
		if (size === 'xs')
			return ` h-3 w-3 ${checked ? 'translate-x-2' : 'translate-x-0 '} `;
		if (size === 'sm')
			return ` h-4 w-4 ${checked ? 'translate-x-3' : 'translate-x-0 '} `;
		if (size === 'md')
			return ` h-5 w-5 ${checked ? 'translate-x-4' : 'translate-x-0 '} `;
		if (size === 'lg')
			return `h-6 w-6 ${checked ? 'translate-x-5' : 'translate-x-0 '} `;
		if (size === 'xl')
			return ` h-7 w-7 ${checked ? 'translate-x-6' : 'translate-x-0 '} `;
	};

	return (
		<Switch
			type='button'
			disabled={disabled}
			checked={checked}
			className={twOverride(`${toggleClasses} ${className}`)}
			onChange={onChange}
			{...props}
		>
			<span className='sr-only'>Use setting</span>
			<span
				aria-hidden='true'
				className={classnames(
					'pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
					getCursorSize(size),
				)}
			/>
		</Switch>
	);
};

Toggle.defaultProps = defaultProps;
Toggle.displayName = 'SiberToggle';
export {Toggle};
