import classnames from 'classnames';
import {overrideTailwindClasses as twOverride} from 'tailwind-override';
import React from 'react';
import type {Color} from 'src/types/colors';
import type {Size} from 'src/types/sizes';

type CheckboxEventTarget = {
	checked: boolean;
};

type CheckboxEvent = {
	target: CheckboxEventTarget;
	stopPropagation: () => void;
	preventDefault: () => void;
	nativeEvent: React.ChangeEvent;
};

type Props = {
	checked?: boolean;
	disabled?: boolean;
	color?: Color;
	size?: Size;
	onChange?: (event: CheckboxEvent) => void;
};

const defaultProps: Props = {
	checked: false,
	disabled: false,
	color: 'sky',
	size: 'md',
};

type NativeAttrs = Omit<React.InputHTMLAttributes<any>, keyof Props>;
export type CheckboxProps = Props & NativeAttrs;

const Checkbox: React.FC<CheckboxProps> = ({
	checked,
	disabled,
	children,
	onChange,
	color,
	className,
	size,
	...props
}) => {
	const [isCheckedState, setIsCheckedState] = React.useState(checked);

	const handleChange = () => {
		setIsCheckedState(value => !value);
	};

	const getLabelSize = (size: string) => {
		if (size === 'xs') return 'px-2.5 py-1.5 text-xs';
		if (size === 'sm') return 'px-3 py-2 text-sm';
		if (size === 'md') return 'px-4 py-2 text-base';
		if (size === 'lg') return 'px-4 py-2 text-lg';
		if (size === 'xl') return 'px-4 py-3 text-xl';
	};

	const getCheckboxClass = (size: string) => {
		if (size === 'xs') return 'h-4 w-4';
		if (size === 'sm') return 'h-4 w-4';
		if (size === 'md') return 'h-4 w-4';
		if (size === 'lg') return 'h-6 w-6';
		if (size === 'xl') return 'h-6 w-6';
	};

	const size_ = getCheckboxClass(size);
	const cursorClass = disabled ? 'not-allowed' : 'pointer';
	const checkboxClasses = classnames(
		size_,
		cursorClass,
		`focus:ring-${color}-500 text-${color}-600 rounded border-gray-300`,
	);

	return (
		<label className='flex items-center'>
			<input
				type='checkbox'
				disabled={disabled}
				checked={checked}
				className={twOverride(`${checkboxClasses} ${className}`)}
				onChange={handleChange}
				{...props}
			/>
			<span
				className={`${getLabelSize(size)} flex items-center justify-center `}
			>
				{children}
			</span>
		</label>
	);
};

Checkbox.defaultProps = defaultProps;
Checkbox.displayName = 'SiberCheckbox';
export {Checkbox};
