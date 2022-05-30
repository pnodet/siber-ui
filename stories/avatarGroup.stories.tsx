import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {AvatarGroup} from '../src';

export default {
	title: 'AvatarGroup',
	component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = ({...args}) => {
	return <AvatarGroup {...args} />;
};
/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Default: ComponentStory<typeof AvatarGroup> = Template.bind({});
