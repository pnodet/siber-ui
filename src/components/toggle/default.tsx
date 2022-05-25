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
	const toggleClasses = classnames(
		checked ? 'bg-gray-200' : `bg-${color}-600`,
		'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
		`focus:ring-${color}-500`,
	);

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
					checked ? 'translate-x-5' : 'translate-x-0',
					'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
				)}
			/>
		</Switch>
	);
};

Toggle.defaultProps = defaultProps;
Toggle.displayName = 'SiberToggle';
export {Toggle};
