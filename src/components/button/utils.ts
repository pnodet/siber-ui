import type {Color} from '../../types/colors';
import type {FullButtonProps} from './default';

export const getSizes = (size: string | undefined) => {
	if (size === 'xs') return 'px-2.5 py-1.5 text-xs';
	if (size === 'sm') return 'px-3 py-2 text-sm leading-4';
	if (size === 'lg') return 'px-4 py-2 text-lg';
	if (size === 'xl') return 'px-6 py-3 text-xl';
	return 'px-4 py-2 text-base';
};

export const getColors = (
	color: Color | undefined,
	variant?: FullButtonProps['variant'],
) => {
	if (variant === 'secondary')
		return `text-${color}-700 bg-${color}-100 hover:bg-${color}-200 focus:ring-${color}-500`;

	if (variant === 'white')
		return `text-gray-700 bg-white hover:bg-gray-50 focus:ring-${color}-500`;

	return `text-white bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500`;
};
