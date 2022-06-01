import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Badge, BadgeProps} from '../src';

const all: ComponentMeta<typeof Badge> = {
	title: 'Badge',
	component: Badge,
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: {type: 'select'}, // Automatically inferred when 'options' is defined
		},
		isRounded: {
			control: {type: 'boolean'},
		},
		hasDot: {
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

export const Default = ({...props}: BadgeProps) => (
	<Badge {...props}>Hello</Badge>
);

export default all;
