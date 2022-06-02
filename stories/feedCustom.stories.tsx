import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {FeedCustom, FeedCustomProps} from '../src';

const all: ComponentMeta<typeof FeedCustom> = {
	title: 'FeedCustom',
	component: FeedCustom,
};

export const Default = ({...args}: FeedCustomProps) => {
	return <FeedCustom {...args} />;
};

export default all;
