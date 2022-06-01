import type {Color} from '../types/colors';

type ValueProps = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const getColor = (color: Color, value: ValueProps): string => {
	if (color === 'black' || color === 'white') return color;
	return `${color}-${value}`;
};
