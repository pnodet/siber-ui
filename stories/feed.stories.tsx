import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Feed, FeedProps, FeedItem} from '../src';

const all: ComponentMeta<typeof Feed> = {
	title: 'FeedCustom',
	component: Feed,
};

const defaultItems: FeedItem[] = [
	{
		id: 1,
		content: 'Hello',
		icon: 'AnnotationIcon',
		iconBackground: 'sky',
		iconColor: 'slate',
	},
	{
		id: 2,
		content: 'Hello',
		icon: 'AnnotationIcon',
		iconBackground: 'sky',
		iconColor: 'slate',
	},
	{
		id: 3,
		content: 'Hello',
		icon: 'AnnotationIcon',
		iconBackground: 'sky',
		iconColor: 'slate',
	},
	{
		id: 4,
		content: 'Hello',
		icon: 'AnnotationIcon',
		iconBackground: 'sky',
		iconColor: 'slate',
	},
];

export const Default = ({...args}: FeedProps) => {
	return <Feed items={defaultItems} {...args} />;
};

export default all;
