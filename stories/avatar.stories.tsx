import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Avatar} from '../src';

export default {
	title: 'Avatar',
	component: Avatar,
	argTypes: {
		variant: {
			table: {
				disable: true,
			},
		},
		imageLink: {
			table: {
				disable: true,
			},
		},
		letters: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = ({...args}) => {
	return <Avatar {...args} />;
};
/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const WithImage: ComponentStory<typeof Avatar> = Template.bind({});
WithImage.args = {
	variant: 'image',
	imageLink:
		'https://i0.wp.com/i.pinimg.com/736x/10/3e/27/103e27dd78a67a85e31695c96ce69fef.jpg?resize=160,120',
};

export const WithText: ComponentStory<typeof Avatar> = Template.bind({});
WithText.args = {
	variant: 'letters',
	letters: 'PN',
};

export const WithPlaceholder: ComponentStory<typeof Avatar> = Template.bind({});
WithPlaceholder.args = {
	variant: 'placeholder',
};
