import React from 'react';
import classnames from 'classnames';
import type {Color} from '../../types/colors';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Position = 'bottom' | 'top';

interface CommonProps {
	size?: Size;
	isRounded?: boolean;
	hasNotification?: boolean;
	notificationPosition?: Position;
	notificationColor?: Color;
}

interface PlaceholderProps {
	variant: 'placeholder';
}

interface ImageProps {
	variant: 'image';
	imageLink: string;
}

interface LettersProps {
	variant: 'letters';
	letters: string;
}

type Props = CommonProps & (PlaceholderProps | ImageProps | LettersProps);

export const Avatar = ({
	size = 'md',
	isRounded = true,
	hasNotification = false,
	notificationPosition = 'bottom',
	notificationColor = 'green',
	...props
}: Props): JSX.Element => {
	let spanSize = 'h-10 w-10';
	if (size === 'xs') spanSize = 'h-6 w-6';
	if (size === 'sm') spanSize = 'h-8 w-8';
	if (size === 'lg') spanSize = 'h-12 w-12';
	if (size === 'xl') spanSize = 'h-14 w-14';
	if (size === '2xl') spanSize = 'h-16 w-16';

	let notificationSize = 'h-2.5 w-2.5';
	if (size === 'xs') notificationSize = 'h-1.5 w-1.5';
	if (size === 'sm') notificationSize = 'h-2 w-2';
	if (size === 'lg') notificationSize = 'h-3 w-3';
	if (size === 'xl') notificationSize = ' h-3.5 w-3.5';
	if (size === '2xl') notificationSize = ' h-4 w-4';

	const r_ = isRounded ? 'rounded-full' : 'rounded';

	const Container = ({children}: {children: JSX.Element}) => (
		<span className='relative inline-block'>
			{children}
			{hasNotification && (
				<span
					className={classnames(
						notificationSize,
						`bg-${notificationColor}-400`,
						notificationPosition === 'bottom' ? 'bottom-0' : 'top-0',
						'absolute right-0 block rounded-full ring-2 ring-white',
					)}
				/>
			)}
		</span>
	);

	if (props.variant === 'placeholder')
		return (
			<Container>
				<span
					className={classnames(
						r_,
						spanSize,
						'inline-block overflow-hidden bg-gray-100',
					)}
				>
					<svg
						className='h-full w-full text-gray-300'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
					</svg>
				</span>
			</Container>
		);

	if (props.variant === 'letters')
		return (
			<Container>
				<span
					className={classnames(
						r_,
						spanSize,
						'inline-flex items-center justify-center bg-gray-500',
					)}
				>
					<span className={`text-${size} font-medium leading-none text-white`}>
						{props.letters}
					</span>
				</span>
			</Container>
		);

	if (props.variant === 'image')
		return (
			<Container>
				<img
					className={classnames(r_, spanSize)}
					src={props.imageLink}
					alt=''
				/>
			</Container>
		);
};
