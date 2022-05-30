import React from 'react';

interface Props {
	color?: string;
	value?: boolean;
	id: string;
	label: string;
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	description: string;
	checkPosition?: 'left' | 'right';
	hasSeparator?: boolean;
}

export const Checkbox = ({
	id,
	label,
	color = 'amber',
	value = false,
	handleChange,
	description,
	checkPosition = 'right',
}: Props) => {
	return (
		<div
			key={id}
			className={`relative flex ${
				checkPosition === 'right' && 'flex-row-reverse'
			} items-start py-3 `}
		>
			<div className='min-w-0 flex-1 text-sm'>
				<label htmlFor={label} className='font-medium text-gray-700'>
					{label}
				</label>
				<p id={`${label}-description`} className='text-gray-500'>
					{description}
				</p>
			</div>
			<div className='mx-3 flex h-5 items-center'>
				<input
					id={label}
					aria-describedby={`${label}-description`}
					name={label}
					type='checkbox'
					checked={value}
					className={`focus:ring-${color}-500 h-4 w-4 text-${color}-600 rounded border-gray-300`}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};
