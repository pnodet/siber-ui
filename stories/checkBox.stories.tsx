import React from 'react';
import {action} from '@storybook/addon-actions';
import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Checkbox, CheckboxProps} from '../src';

const all: ComponentMeta<typeof Checkbox> = {
	title: 'Checkbox',
	component: Checkbox,
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: {type: 'select'}, // Automatically inferred when 'options' is defined
		},
		disabled: {
			control: {type: 'boolean'},
		},
		checked: {
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

export const Default = ({
	size,
	className,
	checked,
	color,
	disabled,
}: CheckboxProps) => {
	return (
		<Checkbox
			size={size}
			color={color}
			className={className}
			checked={checked}
			disabled={disabled}
			onChange={action('Button is clicked!')}
		>
			Hello
		</Checkbox>
	);
};

export default all;
