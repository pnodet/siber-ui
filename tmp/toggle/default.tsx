import React, {Dispatch, SetStateAction} from 'react';
import {Switch} from '@headlessui/react';
import classnames from 'classnames';
import type {Color} from '../../types/colors';

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
	color?: Color;
}

export const Toggle = ({
	isActive,
	setIsActive,
	color = 'sky',
}: Props): JSX.Element => (
	<Switch
		checked={isActive}
		className={classnames(
			isActive ? `bg-${color}-600` : 'bg-gray-200',
			'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
			`focus:ring-${color}-500`,
		)}
		onChange={setIsActive}
	>
		<span className='sr-only'>Use setting</span>
		<span
			aria-hidden='true'
			className={classnames(
				isActive ? 'translate-x-5' : 'translate-x-0',
				'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
			)}
		/>
	</Switch>
);
