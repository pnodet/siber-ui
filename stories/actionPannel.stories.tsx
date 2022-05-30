import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {ActionPanel} from '../src';

export default {
	title: 'ActionPanel',
	component: ActionPanel,
	argTypes: {
		title: {
			control: {type: 'text'}, // Automatically inferred when 'options' is defined
		},
		description: {
			control: {type: 'text'}, // Automatically inferred when 'options' is defined
		},
		ctaPosition: {
			options: ['bottom', 'right'],
			control: {type: 'select'}, // Automatically inferred when 'options' is defined
		},
		bgColor: {
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
} as ComponentMeta<typeof ActionPanel>;

const Template: ComponentStory<typeof ActionPanel> = ({
	title,
	description,
	ctaPosition,
	bgColor,
}) => {
	return (
		<ActionPanel
			type='link'
			href='#'
			action='Go'
			title={title}
			description={description}
			ctaPosition={ctaPosition}
			bgColor={bgColor}
		/>
	);
};
/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Error: ComponentStory<typeof ActionPanel> = Template.bind({});
