import React, {useState} from 'react';
import type {Color} from 'src/types/colors';
import {getColor} from '../../utils/get-color';

const defautlSteps: StepsProps[] = [
	{id: 1, href: '#', status: 'complete'},
	{id: 2, href: '#', status: 'current'},
	{id: 3, href: '#', status: 'upcoming'},
	{id: 4, href: '#', status: 'upcoming'},
];

export type StepsProps = {
	id: number;
	status: 'complete' | 'current' | 'upcoming';
	href: string;
};
export type BulletsProps = {
	steps?: StepsProps[];
	color?: Color;
};

const Bullets = ({steps = defautlSteps, color = 'sky'}: BulletsProps) => {
	return (
		<nav className='flex items-center justify-center' aria-label='Progress'>
			<p className='text-sm font-medium'>
				Step {steps.findIndex(step => step.status === 'current') + 1} of{' '}
				{steps.length}
			</p>
			<ol role='list' className='ml-8 flex items-center space-x-5'>
				{steps.map(step => (
					<li key={step.id}>
						{step.status === 'complete' ? (
							<a
								href={step.href}
								className={`block w-2.5 h-2.5 bg-${getColor(
									color,
									600,
								)} rounded-full hover:bg-${getColor(color, 900)}`}
							>
								<span className='sr-only'>{step.id}</span>
							</a>
						) : step.status === 'current' ? (
							<a
								href={step.href}
								className='relative flex items-center justify-center'
								aria-current='step'
							>
								<span className='absolute w-5 h-5 p-px flex' aria-hidden='true'>
									<span
										className={`w-full h-full rounded-full bg-${getColor(
											color,
											200,
										)}`}
									/>
								</span>
								<span
									className={`relative block w-2.5 h-2.5 bg-${getColor(
										color,
										600,
									)} rounded-full`}
									aria-hidden='true'
								/>
								<span className='sr-only'>{step.id}</span>
							</a>
						) : (
							<a
								href={step.href}
								className='block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400'
							>
								<span className='sr-only'>{step.id}</span>
							</a>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export {Bullets};
