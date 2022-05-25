import React from 'react';
import * as HIcons from '@heroicons/react/solid';

interface Props {
	children: React.ReactNode;
	type?: 'error' | 'success' | 'warning' | 'info';
	hasAccent?: boolean;
	hasDismissButton?: boolean;
}

export const Alert = ({
	type = 'error',
	children,
	hasAccent = false,
	hasDismissButton = false,
}: Props): JSX.Element => {
	let color = 'red';
	if (type === 'info') color = 'blue';
	if (type === 'success') color = 'green';
	if (type === 'warning') color = 'yellow';

	const {...icons} = HIcons;
	let icon: keyof typeof HIcons = 'XCircleIcon';
	if (type === 'info') icon = 'InformationCircleIcon';
	if (type === 'success') icon = 'CheckCircleIcon';
	if (type === 'warning') icon = 'ExclamationIcon';

	const CustomIcon = icons[icon];
	const iconStyle = `h-5 w-5 text-${color}-400`;

	return (
		<div
			className={`bg-${color}-100 rounded-md p-4 ${
				hasAccent && `border-l-4 border-${color}-400}`
			}`}
		>
			<div className="flex">
				<div className="flex-shrink-0">
					<CustomIcon className={iconStyle} aria-hidden="true" />
				</div>
				<div className="ml-3">{children}</div>

				{hasDismissButton && (
					<div className="ml-auto pl-3">
						<div className="-mx-1.5 -my-1.5">
							<button
								type="button"
								className={`inline-flex bg-${color}-50 rounded-md p-1.5 text-${color}-500 hover:bg-${color}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-50 focus:ring-${color}-600`}
							>
								<span className="sr-only">Dismiss</span>
								<HIcons.XIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
