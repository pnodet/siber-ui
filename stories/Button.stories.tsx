import React from 'react';
import type {ComponentStory} from '@storybook/react';
import {
	Button,
	ButtonProps,
	FullButtonProps,
	Circular as CircularButton,
	CircularButtonProps,
} from '../src';

export default {
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
} as FullButtonProps;

const TemplatePrimary: ComponentStory<typeof Button> = ({
	size,
	isRounded,
	color,
	isDisabled,
}: ButtonProps) => (
	<Button
		size={size}
		color={color}
		isDisabled={isDisabled}
		variant="primary"
		isRounded={isRounded}
	>
		Hello
	</Button>
);

export const Primary: ComponentStory<typeof Button> = TemplatePrimary.bind({});

const TemplateSecondary: ComponentStory<typeof Button> = ({
	size,
	isRounded,
	color,
	isDisabled,
}: ButtonProps) => (
	<Button
		size={size}
		color={color}
		isDisabled={isDisabled}
		variant="secondary"
		isRounded={isRounded}
	>
		Hello
	</Button>
);

export const Secondary = TemplateSecondary.bind({});

const TemplateWhite: ComponentStory<typeof Button> = ({
	size,
	isRounded,
	color,
	isDisabled,
}: ButtonProps) => (
	<Button
		size={size}
		color={color}
		isDisabled={isDisabled}
		variant="white"
		isRounded={isRounded}
	>
		Hello
	</Button>
);

export const White = TemplateWhite.bind({});

const TemplateCircular: ComponentStory<typeof Button> = ({
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

export const DefaultCircular = TemplateCircular.bind({});
