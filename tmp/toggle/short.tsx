import React, {Dispatch, SetStateAction} from 'react';
import {Switch} from '@headlessui/react';
import classnames from 'classnames';
import type {Color} from '../../types/colors';

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
	color?: Color;
}

export const ToggleShort = ({
	isActive,
	setIsActive,
	color = 'sky',
}: Props): JSX.Element => (
	<Switch
		checked={isActive}
		className={classnames(
			'group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2',
			`focus:ring-${color}-500`,
		)}
		onChange={setIsActive}
	>
		<span className='sr-only'>Use setting</span>
		<span
			aria-hidden='true'
			className='pointer-events-none absolute h-full w-full rounded-md bg-white'
		/>
		<span
			aria-hidden='true'
			className={classnames(
				isActive ? `bg-${color}-600` : 'bg-gray-200',
				'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
			)}
		/>
		<span
			aria-hidden='true'
			className={classnames(
				isActive ? 'translate-x-5' : 'translate-x-0',
				'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
			)}
		/>
	</Switch>
);
