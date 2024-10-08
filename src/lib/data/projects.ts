import type { Project } from '../types';
import Assets from './assets';
import { getSkills } from './skills';

export const items: Array<Project> = [
	{
		slug: 'Image-Recognition-using-TensorFlow',
		color: '#5e95e3',
		description:
			'AboutThis tutorial shows how to classify images of flowers using a tf.keras.Sequential model and load data using tf.keras.utils.image_dataset_from_directory. It demonstrates the following concepts: Efficiently loading a dataset off disk. Identifying overfitting and applying techniques to mitigate it, including data augmentation and dropout.',
		shortDescription:
			'This project demonstrates the process of building an image classification model using TensorFlow, a popular deep learning framework.',
		links: [{ to: 'https://github.com/ibrhmahmd/Image-Recognition-using-TensorFlow', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Image-Recognition-using-TensorFlow',
		period: { from: new Date(2024, 4, 1), to: new Date(2024,4,7) },
		skills: getSkills('Python', 'Keras','CNN', 'TensorFlow','Data Cleaning'),
		type: 'ML Model'
	},
	{
		slug: 'INhive : Trading',
		color: '#ff3e00',
		description:
			'Aims to revolutionize investment accessibility by providing a platform equipped with real‑time data,trading capabilities, educational resources, empowering informed decisions and navigate the financialmarkets with confidence',
		shortDescription:
		'Aims to revolutionize investment accessibility by providing a platform equipped with real‑time data,trading capabilities, educational resources, empowering informed decisions and navigate the financialmarkets with confidence',
		links: [{ to: 'https://github.com/ibrhmahmd/INhive-investing', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'INHIVE',
		period: { from: new Date(2023, 10, 1), to: new Date(2023,11,1) },
		skills: getSkills('C#','.NET', 'Windows Form UI', 'SQL Server'),
		type: 'DeskTop App',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'TETRIS',
		color: '#5e95e3',
		description:
		'TETRIS in WPF.NET: This project is a modern implementation of the classic Tetris game using WPF and C#. It features smooth gameplay, intuitive controls, and a sleek user interface. Perfect for both nostalgic gamers and new players alike!',
		shortDescription:
			'TETRIS in WPF.NET: This project is a modern implementation of the classic Tetris game using WPF and C#. It features smooth gameplay, intuitive controls, and a sleek user interface. Perfect for both nostalgic gamers and new players alike!',
		links: [{ to: 'https://github.com/ibrhmahmd/TETRIS', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'TETRIS',
		period: { from: new Date(2024, 8, 1), to: new Date(2024,8,7) },
		skills: getSkills('C#','WPF','OOP','Data Structure & Algorithms','Version Control "GIT"'),
		type: 'GAME'
	},
	{
		slug: 'TETRIS',
		color: '#5e95e3',
		description:
		'This project demonstrates the use of a genetic algorithm (GA) to reproduce an image. The implementation utilizes the pygad library for the genetic algorithm, the gari library for image-to-chromosome conversion, and matplotlib for visualization. The aim is to generate an image that closely resembles a target image through evolutionary processes.Project Overvie',
		shortDescription:
		'This project demonstrates the use of a genetic algorithm (GA) to reproduce an image. The implementation utilizes the pygad library for the genetic algorithm, the gari library for image-to-chromosome conversion, and matplotlib for visualization. The aim is to generate an image that closely resembles a target image through evolutionary processes.Project Overvie',
		links: [{ to: 'https://github.com/ibrhmahmd/Genetic_Algorithm_Reproducing_Images', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Genetic_Algorithm_Reproducing_Images',
		period: { from: new Date(2024, 3, 15), to: new Date(2024,3,30) },

		skills: getSkills('Python','Genetic Algorithms','numpy','imageio','gari','pygad','matplotlib','Version Control "GIT"'),
		type: 'Image Model'
	},
	{
		slug: 'Genetic Algorithm In C',
		color: '#5e95e3',
		description:
		'The development of this genetic algorithm image generator involved creating a system that evolves binary images to closely match a target image using genetic algorithms. The project integrates selection, crossover, mutation, and replacement techniques to iteratively refine image quality. It leverages C++ for efficient performance and utilizes OpenCV for image handling and display. The implementation allows for visualization of the evolutionary process in real-time.',
		shortDescription:
		'The development of this genetic algorithm image generator involved creating a system that evolves binary images to closely match a target image using genetic algorithms. The project integrates selection, crossover, mutation, and replacement techniques to iteratively refine image quality. It leverages C++ for efficient performance and utilizes OpenCV for image handling and display. The implementation allows for visualization of the evolutionary process in real-time.',
		links: [{ to: 'https://github.com/ibrhmahmd/Genetic_Algorithm_In_C', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Genetic Algorithm In C',
		period: { from: new Date(2024, 3, 15), to: new Date(2024,3,30) },

		skills: getSkills('C','C++','OpenCV','Genetic Algorithms (selection, crossover, mutation, replacement)'),
		type: 'Image Model'
	},

];
export const title = 'Projects';
