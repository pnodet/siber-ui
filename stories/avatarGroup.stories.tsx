import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {AvatarGroup} from '../src';

const all: ComponentMeta<typeof AvatarGroup> = {
	title: 'AvatarGroup',
	component: AvatarGroup,
};

export const Default = ({...args}) => {
	return <AvatarGroup {...args} />;
};

export default all;
