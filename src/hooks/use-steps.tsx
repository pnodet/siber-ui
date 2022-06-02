import {useEffect, useState} from 'react';

type Step = {
	id: number;
	name: string;
	href: string;
	status: 'complete' | 'current' | 'upcoming';
};

type Props = {steps: Step[]; currentStep: number};
const useSteps = ({steps, currentStep}: Props) => {
	const [steps_, setSteps] = useState<Step[]>();
	useEffect(() => {
		setSteps(
			steps.map((step, stepIdx) => {
				if (stepIdx === currentStep) return {...step, status: 'current'};
				if (stepIdx < currentStep) return {...step, status: 'complete'};
				return {...step, status: 'upcoming'};
			}),
		);
	}, []);

	return steps_;
};

export default useSteps;
