import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Bullets, BulletsProps} from '../src';

const all: ComponentMeta<typeof Bullets> = {
	title: 'Steps-Bullets',
	component: Bullets,
};

export const Default = ({...args}: BulletsProps) => {
	return <Bullets {...args} />;
};

export default all;
