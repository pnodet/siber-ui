import React from 'react';
import type {Color} from '../../types/colors';

type Props = {
	title: string;
	defaultValue: string;
	color?: Color;
};

export const Textarea: React.FC<Props> = ({
	title,
	color = 'sky',
	defaultValue = '',
}): JSX.Element => {
	return (
		<div>
			<label
				htmlFor='comment'
				className='block text-sm font-medium text-gray-700'
			>
				{title}
			</label>
			<div className='mt-1'>
				<textarea
					rows={4}
					name='comment'
					id='comment'
					className={`shadow-sm focus:ring-${color}-500 focus:border-${color}-500 block w-full sm:text-sm border-gray-300 rounded-md`}
					defaultValue={defaultValue}
				/>
			</div>
		</div>
	);
};
