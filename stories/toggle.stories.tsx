import React, {useState} from 'react';
import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Toggle, ToggleProps} from '../src';

const all: ComponentMeta<typeof Toggle> = {
	title: 'Toggle',
	component: Toggle,
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: {type: 'select'}, // Automatically inferred when 'options' is defined
		},
		disabled: {
			control: {type: 'boolean'},
		},
		color: {
			options: [
				'black',
				'white',
				'slate',
				'gray',
				'zinc',
				'neutral',
				'stone',
				'red',
				'orange',
				'amber',
				'yellow',
				'lime',
				'green',
				'emerald',
				'teal',
				'cyan',
				'sky',
				'blue',
				'indigo',
				'violet',
				'purple',
				'fuchsia',
				'pink',
				'rose',
			],
			control: {type: 'select'},
		},
	},
};

export const Default = ({size, className, color, disabled}: ToggleProps) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	return (
		<Toggle
			size={size}
			color={color}
			className={className}
			checked={isChecked}
			disabled={disabled}
			onChange={() => {
				setIsChecked(value => !value);
			}}
		/>
	);
};

export default all;
