import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'IBRAHIM';

export const lastName = 'AHMED';

export const description =
	'A back-end developer, Expertise in C++, C#, Python, along with proficiency in OOP, DSA I excel in leveraging Microsoft technologies, including .NET Core, ASP.NET Core, MVC, REST API, and SQL Server. RecentlyI have been working on integrating the Ollama API to include the Llama2 LLM in my projects, enhancing the capabilities ofmy applications with advanced language models';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/ibrhmahmd' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/ibrhmahmd'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'ibrhmahmd743@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('C#', 'C++', 'Python', '.NET', 'EF Core', 'ASP.NET', 'js');
