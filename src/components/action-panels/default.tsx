import React, {Dispatch, SetStateAction} from 'react';
import {Switch} from '@headlessui/react';
import classnames from 'classnames';
import type {Color} from 'src/types/colors';
import {getColor} from '../../utils/get-color';

interface Props {
	title?: string;
	description?: string;
	ctaPosition?: 'bottom' | 'right';
	bgColor?: Color;
	type?: 'link' | 'button' | 'toggle';
}

const defaultProps: Props = {
	title: 'Test de titre',
	type: 'button',
	description: 'test de description',
	ctaPosition: 'bottom',
	bgColor: 'sky',
};

interface LinkProps {
	href: string;
	type: 'link';
	action: string;
}

interface BtnProps {
	action: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	btnColor?: Color;
	type: 'button';
}

interface ToggleProps {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
	type: 'toggle';
}

export type ActionPanelProps = Props & (LinkProps | BtnProps | ToggleProps);

const ActionPanel: React.FC<ActionPanelProps> = ({
	title,
	description,
	ctaPosition,
	bgColor,
	...props
}: ActionPanelProps): JSX.Element => {
	const Cta = ({...props}: ActionPanelProps): JSX.Element => {
		if (props.type === 'link') {
			return (
				<div
					className={`${
						ctaPosition === 'bottom' && 'mt-3'
					}  flex h-full flex-col items-center justify-center`}
				>
					<a
						href={props.href}
						className='font-medium text-indigo-600 hover:text-indigo-500 whitespace-nowrap'
					>
						{props.action}
						<span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			);
		}

		if (props.type === 'toggle')
			return (
				<div
					className={`${
						ctaPosition === 'bottom' && 'mt-3'
					}  flex h-full flex-col items-center justify-center`}
				>
					<Switch
						checked={props.isActive}
						className={classnames(
							props.isActive ? 'bg-indigo-600' : 'bg-gray-200',
							'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
						)}
						onChange={props.setIsActive}
					>
						<span
							aria-hidden='true'
							className={classnames(
								props.isActive ? 'translate-x-5' : 'translate-x-0',
								'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
							)}
						/>
					</Switch>
				</div>
			);

		if (props.type === 'button')
			return (
				<div
					className={`${
						ctaPosition === 'bottom' && 'mt-3'
					}  flex h-full flex-col items-center justify-center`}
				>
					<button
						type='button'
						className={`inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 font-medium text-${getColor(
							props.btnColor,
							700,
						)} bg-${getColor(props.btnColor, 100)} hover:bg-${getColor(
							props.btnColor,
							200,
						)} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${getColor(
							props.btnColor,
							500,
						)} sm:text-sm`}
						onClick={props.onClick}
					>
						{props.action}
					</button>
				</div>
			);
	};

	return (
		<div
			className={`bg-${bgColor}-100 flex w-10/12 max-w-5xl shadow sm:w-5/6 sm:rounded-lg`}
		>
			<div
				className={`flex px-4 py-5 sm:p-6 ${
					ctaPosition === 'bottom'
						? 'flex-col items-start justify-start'
						: 'w-full  justify-around'
				}     w-full`}
			>
				<div className='flex w-full flex-col items-start'>
					<h3 className='text-lg font-medium leading-6 text-gray-900'>
						{title}
					</h3>
					<div className='mt-2 max-w-xl text-sm text-gray-500'>
						<p>{description}</p>
					</div>
				</div>
				<div className='flex h-full flex-col items-center justify-center'>
					<Cta {...props} />
				</div>
			</div>
		</div>
	);
};

ActionPanel.defaultProps = defaultProps;
ActionPanel.displayName = 'SiberActionPannel';

export {ActionPanel};
