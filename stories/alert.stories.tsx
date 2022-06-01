import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Alert, AlertProps} from '../src';

const all: ComponentMeta<typeof Alert> = {
	title: 'Alert',
	component: Alert,
	argTypes: {
		type: {
			table: {
				disable: true,
			},
		},
	},
};

const template = ({...args}: AlertProps) => <Alert {...args}>Hello</Alert>;

export const Error: ComponentStory<typeof Alert> = args => template({...args});
Error.args = {
	type: 'error',
};

export const Sucess: ComponentStory<typeof Alert> = args => template({...args});
Sucess.args = {
	type: 'success',
};

export const Info: ComponentStory<typeof Alert> = args => template({...args});
Info.args = {
	type: 'info',
};

export const Warning: ComponentStory<typeof Alert> = args =>
	template({...args});
Warning.args = {
	type: 'warning',
};
export default all;
