import type { Education } from '../types';
import Assets from './assets';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: 'Computer Science major',
		location: 'Egypt',
		logo: Assets.Unknown,
		name: '',
		organization: '',
		period: { from: new Date(2021, 9, 1), to: new Date(2025) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C#', 'Algebra', 'Python', 'C++', 'English','Data structure/& Algorithms', 'Project management', 'Software Engineering', 'Web development',
			'Information Systems', 'AI/& Machine Learning', 'Computer networks','DeskTop development', '.NET']
	},
	
];

export const title = 'Education';
