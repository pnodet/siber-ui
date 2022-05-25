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

	const handleChange = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (disabled) return;
			const selfEvent: CheckboxEvent = {
				target: {
					checked: !isCheckedState,
				},
				stopPropagation: event.stopPropagation,
				preventDefault: event.preventDefault,
				nativeEvent: event,
			};

			setIsCheckedState(!isCheckedState);
			if (onChange) onChange(selfEvent);
		},
		[isCheckedState, onChange, disabled],
	);

	const checkboxClasses = classnames(
		`focus:ring-${color}-500 h-4 w-4 text-${color}-600 rounded border-gray-300`,
	);

	return (
		<label>
			<input
				type='checkbox'
				disabled={disabled}
				checked={checked}
				className={twOverride(`${checkboxClasses} ${className}`)}
				onChange={handleChange}
				{...props}
			/>
			<span className='text'>{children}</span>
		</label>
	);
};

Checkbox.defaultProps = defaultProps;
Checkbox.displayName = 'SiberCheckbox';
export {Checkbox};
