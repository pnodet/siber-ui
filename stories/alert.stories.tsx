import type {ComponentStory} from '@storybook/react';
import React from 'react';
import {Alert} from '../src';

const meta = {
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

export default meta;

const Template: ComponentStory<typeof Alert> = ({...args}) => (
	<Alert {...args}>Hello</Alert>
);
/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Error: ComponentStory<typeof Alert> = Template.bind({});
Error.args = {
	type: 'error',
};
export const Sucess: ComponentStory<typeof Alert> = Template.bind({});
Sucess.args = {
	type: 'success',
};
export const Info: ComponentStory<typeof Alert> = Template.bind({});
Info.args = {
	type: 'info',
};
export const Warning: ComponentStory<typeof Alert> = Template.bind({});
Warning.args = {
	type: 'warning',
};
