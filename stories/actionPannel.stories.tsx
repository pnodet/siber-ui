import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {ActionPanel} from '../src';

export default {
	title: 'ActionPanel',
	component: ActionPanel,
} as ComponentMeta<typeof ActionPanel>;

const Template: ComponentStory<typeof ActionPanel> = ({...args}) => {
	return <ActionPanel {...args} />;
};
/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const Default: ComponentStory<typeof ActionPanel> = Template.bind({});
