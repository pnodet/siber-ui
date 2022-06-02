import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Pagination, PaginationProps} from '../src';

const all: ComponentMeta<typeof Pagination> = {
	title: 'Pagination',
	component: Pagination,
};

export const Default = ({...args}: PaginationProps) => {
	return <Pagination {...args} />;
};

export default all;
