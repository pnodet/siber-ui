import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Dropdown, DropDownProps} from '../src';

const all: ComponentMeta<typeof Dropdown> = {
	title: 'DropDown',
	component: Dropdown,
	argTypes: {
		items: {
			table: {
				disable: true,
			},
		},
	},
};

export const Default = ({...args}: DropDownProps) => {
	return <Dropdown {...args} />;
};

export default all;
