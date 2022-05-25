import React from 'react';
import type {ComponentStory} from '@storybook/react';
import {
	Button,
	Circular as CircularButton,
	FullButtonProps,
	FullCircularButtonProps,
} from '../src';

const meta = {
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

export default meta;

const Template: ComponentStory<typeof Button> = ({
	size,
	isRounded,
	color,
	isDisabled,
	...args
}: FullButtonProps) => (
	<Button
		size={size}
		color={color}
		isDisabled={isDisabled}
		isRounded={isRounded}
		{...args}
	>
		Hello
	</Button>
);

/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
	variant: 'primary',
};

/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
	variant: 'secondary',
};

/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const White: ComponentStory<typeof Button> = Template.bind({});
White.args = {
	variant: 'white',
};

const TemplateCircular: ComponentStory<typeof CircularButton> = ({
	size,
	color,
	isDisabled,
	icon,
}: FullCircularButtonProps) => (
	<CircularButton
		size={size}
		color={color}
		isDisabled={isDisabled}
		icon={icon}
	/>
);

/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const DefaultCircular = TemplateCircular.bind({});
