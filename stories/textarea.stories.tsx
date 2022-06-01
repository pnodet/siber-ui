import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Textarea, TextAreaProps} from '../src';

const all: ComponentMeta<typeof Textarea> = {
	title: 'Textarea',
	component: Textarea,
};

export const Default = ({...args}: TextAreaProps) => {
	return <Textarea {...args} />;
};

export default all;
