export const getSizes = (size: string) => {
	if (size === 'xs') return 'px-2.5 py-1.5 text-xs';
	if (size === 'sm') return 'px-3 py-2 text-sm';
	if (size === 'md') return 'px-4 py-2 text-base';
	if (size === 'lg') return 'px-4 py-2 text-lg';
	if (size === 'xl') return 'px-6 py-3 text-xl';
};
