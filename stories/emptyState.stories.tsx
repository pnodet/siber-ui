import type {ComponentMeta, ComponentStory} from '@storybook/react';

import {CheckIcon} from '@heroicons/react/solid';
import React from 'react';
import {EmptyState, EmptyStateProps} from '../src';

const all: ComponentMeta<typeof EmptyState> = {
	title: 'EmptyState',
	component: EmptyState,
	/* ArgTypes: {
        items: {
            table: {
                disable: true,
            },
        },
    }, */
};

export const Default = ({children, ...args}: EmptyStateProps) => {
	return (
		<EmptyState {...args} Icon={CheckIcon}>
			{children}
		</EmptyState>
	);
};

Default.args = {
	children: 'Prov text',
};

export default all;
