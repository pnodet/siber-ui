import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Banner} from '../src';
import type {BannerProps} from '../src';

const all: ComponentMeta<typeof Banner> = {
	title: 'Banner',
	component: Banner,
};

export const Default = ({...args}: BannerProps) => {
	return <Banner {...args}>This is an exemple of banner !!</Banner>;
};

export default all;
