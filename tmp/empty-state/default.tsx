import React from 'react';
import type {Color} from '../../types/colors';

interface Props {
	children: React.ReactNode;
	color?: Color;
	Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export const EmptyState: React.FC<Props> = ({
	children,
	Icon,
	color = 'sky',
}): JSX.Element => {
	return (
		<button
			type='button'
			className={`relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 `}
		>
			<Icon />
			<span className='mt-2 block text-sm font-medium text-gray-900'>
				{children}
			</span>
		</button>
	);
};
