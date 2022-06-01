import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import type {ActionPanelProps} from 'src/components/action-panels/default';
import {ActionPanel} from '../src';

const all: ComponentMeta<typeof ActionPanel> = {
	title: 'ActionPanel',
	component: ActionPanel,

	argTypes: {
		type: {
			table: {
				disable: true,
			},
		},
		ctaPosition: {
			options: ['left', 'bottom'],
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
		btnColor: {
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

const template = ({...args}: ActionPanelProps) => {
	return <ActionPanel {...args} />;
};

export const Button: ComponentStory<typeof ActionPanel> = args =>
	template({...args});
Button.args = {
	title: 'Test de titre',
	bgColor: 'gray',
	action: 'Lets go ',
	type: 'button',
	ctaPosition: 'bottom',
	btnColor: 'fuchsia',
};

export const Link: ComponentStory<typeof ActionPanel> = args =>
	template({...args});
Link.args = {
	title: 'Test de titre',
	type: 'link',
	action: 'Lets go ',
};

export const Toggle: ComponentStory<typeof ActionPanel> = args =>
	template({...args});
Toggle.args = {
	title: 'Test de titre',
	type: 'toggle',
};

export default all;
