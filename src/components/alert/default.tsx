import React from 'react';
import * as HIcons from '@heroicons/react/solid';
import type {Color} from 'src/types/colors';
import {getColor} from '../../utils/get-color';

type Props = {
	children: React.ReactNode;
	type?: 'error' | 'success' | 'warning' | 'info';
	hasAccent?: boolean;
	hasDismissButton?: boolean;
};

export type AlertProps = Props;

const Alert = ({
	type = 'error',
	children,
	hasAccent = false,
	hasDismissButton = false,
}: Props): JSX.Element => {
	let color = 'red' as Color;
	if (type === 'info') color = 'blue' as Color;
	if (type === 'success') color = 'green' as Color;
	if (type === 'warning') color = 'yellow' as Color;

	const {...icons} = HIcons;
	let icon: keyof typeof HIcons = 'XCircleIcon';
	if (type === 'info') icon = 'InformationCircleIcon';
	if (type === 'success') icon = 'CheckCircleIcon';
	if (type === 'warning') icon = 'ExclamationIcon';

	const CustomIcon = icons[icon];
	const iconStyle = ` h-5 w-5 text-${color}-400 `;

	return (
		<div
			className={`bg-${getColor(color, 100)} rounded-md p-4 ${
				hasAccent && ` border-l-4  border-${getColor(color, 700)}`
			}`}
		>
			<div className='flex'>
				<div className='flex-shrink-0'>
					<CustomIcon className={iconStyle} aria-hidden='true' />
				</div>
				<div className='ml-3'>{children}</div>

				{hasDismissButton && (
					<div className='ml-auto pl-3'>
						<div className='-mx-1.5 -my-1.5'>
							<button
								type='button'
								className={`inline-flex bg-${getColor(
									color,
									100,
								)} rounded-md p-1.5 text-${getColor(
									color,
									500,
								)} hover:bg-${getColor(
									color,
									100,
								)} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${getColor(
									color,
									100,
								)} focus:ring-${getColor(color, 600)}`}
							>
								<span className='sr-only'>Dismiss</span>
								<HIcons.XIcon className='h-5 w-5' aria-hidden='true' />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export {Alert};
