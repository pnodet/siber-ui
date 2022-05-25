import type { ComponentStory } from '@storybook/react';
import React from 'react';
import { Badge, BadgeProps } from '../src';

const meta = {
	title: 'Badge',
	component: Badge,
	argTypes: {
		size: {
			options: ["xs", "sm", "md", "lg", "xl"],
			control: { type: 'select' }, // Automatically inferred when 'options' is defined
		},
		isRounded: {
			control: { type: 'boolean' },
		},
		hasDot: {
			control: { type: 'boolean' },
		},
		color: {
			options: ['black', 'white', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
			control: { type: 'select' }
		}
	},
};

export default meta;

const Template = ({ size, isRounded, color, hasDot }) => <Badge size={size} hasDot={hasDot} color={color} isRounded={isRounded}>
	Hello
</Badge>;
;



/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Default: ComponentStory<typeof Badge> = Template.bind({});


