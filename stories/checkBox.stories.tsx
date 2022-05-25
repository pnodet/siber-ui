import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import type {ComponentStory} from '@storybook/react';
import {Checkbox, CheckboxProps} from '../src';

export default {
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
} as ComponentMeta<typeof Checkbox>;

const Template = ({
	size,
	className,
	checked,
	color,
	disabled,
}: CheckboxProps) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<Checkbox
			size={size}
			color={color}
			className={className}
			checked={isChecked}
			onChange={action('Button is clicked!')}
			disabled={disabled}
		>
			Hello
		</Checkbox>
	);
};
/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Primary: ComponentStory<typeof Checkbox> = Template.bind({});
Primary.args = {};
