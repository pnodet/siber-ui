import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Avatar, AvatarProps} from '../src';

const all: ComponentMeta<typeof Avatar> = {
	title: 'Avatar',
	component: Avatar,
	argTypes: {
		variant: {
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
};

const template = ({...args}: AvatarProps) => {
	return <Avatar {...args} />;
};

export const WithImage: ComponentStory<typeof Avatar> = args =>
	template({...args});
WithImage.args = {
	variant: 'image',
	imageLink:
		'https://i0.wp.com/i.pinimg.com/736x/10/3e/27/103e27dd78a67a85e31695c96ce69fef.jpg?resize=160,120',
};

export const WithText: ComponentStory<typeof Avatar> = args =>
	template({...args});
WithText.args = {
	variant: 'letters',
	letters: 'PN',
	bgColor: 'blue',
};

export const WithPlaceholder: ComponentStory<typeof Avatar> = args =>
	template({...args});
WithPlaceholder.args = {
	variant: 'placeholder',
};

export default all;
