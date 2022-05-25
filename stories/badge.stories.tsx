import type {ComponentStory} from '@storybook/react';
import React from 'react';
import {Badge, BadgeProps} from '../src';

const meta = {
	title: 'Badge',
	component: Badge,
};

export default meta;

const Template: ComponentStory<typeof Badge> = ({
	size,
	isRounded,
	color,
	...args
}: BadgeProps) => (
	<Badge size={size} color={color} isRounded={isRounded} {...args}>
		Hello
	</Badge>
);

/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Default: ComponentStory<typeof Badge> = Template.bind({});
