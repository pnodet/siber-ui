import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Textarea} from '../src';

export default {
	title: 'Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = ({...args}) => {
	return <Textarea {...args} />;
};
/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Default: ComponentStory<typeof Textarea> = Template.bind({});
