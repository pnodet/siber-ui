import React from 'react';
import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {
	Button,
	Circular as CircularButton,
	ButtonProps,
	CircularButtonProps,
} from '../src';

const all: ComponentMeta<typeof Button> = {
	title: 'Button',
	component: Button,
	argTypes: {
		variant: {
			table: {
				disable: true,
			},
		},
		type: {
			table: {
				disable: true,
			},
		},
	},
};

const template = ({
	size,
	isRounded,
	color,
	isDisabled,
	...args
}: ButtonProps) => (
	<Button
		size={size}
		color={color}
		isDisabled={isDisabled}
		isRounded={isRounded}
		onClick={action('test')}
		{...args}
	>
		Hello
	</Button>
);

export const Primary: ComponentStory<typeof Button> = args =>
	template({...args});
Primary.args = {
	variant: 'primary',
};

export const Secondary: ComponentStory<typeof Button> = args =>
	template({...args});
Secondary.args = {
	variant: 'secondary',
};

export const White: ComponentStory<typeof Button> = args => template({...args});
White.args = {
	variant: 'white',
};

const templateCircular = ({
	size,
	color,
	isDisabled,
	icon,
}: CircularButtonProps) => (
	<CircularButton
		size={size}
		color={color}
		isDisabled={isDisabled}
		icon={icon}
	/>
);

export const Circular: ComponentStory<typeof CircularButton> = args =>
	templateCircular({...args});

export default all;
