import React, {useState} from 'react';
import type {ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Toggle, ToggleProps} from '../src';

export default {
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

const Template = ({size, className, color, disabled}: ToggleProps) => {
	const [isChecked, setIsChecked] = useState(false);
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

/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Primary: ComponentStory<typeof Toggle> = Template.bind({});
