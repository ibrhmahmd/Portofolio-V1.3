import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import type { Skill, SkillCategory } from '../types';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
		'a modern, object-oriented programming language developed by Microsoft. It is widely used for building a variety of applications, including web, desktop, and mobile apps, thanks to its integration with the .NET framework. C# is known for its strong typing, memory management through garbage collection, and support for both object-oriented and functional programming paradigms. With features like asynchronous programming, LINQ, and pattern matching, C# allows developers to write clean, efficient, and scalable code. Its versatility also extends to game development, particularly with the Unity engine.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in the late 1980s, Python emphasizes code readability with its use of significant whitespace. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Pythons extensive standard library and third-party modules make it versatile for web development, data analysis, machine learning, automation, and more. With popular frameworks like Django for web development and libraries like TensorFlow for AI, Python has become a go-to language for developers and data scientists alike.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'CPP',
		color: 'blue',
		description:
			'C++ is a high-performance, general-purpose programming language created by Bjarne Stroustrup in 1985 as an extension of C. It combines low-level memory manipulation capabilities with high-level abstractions through its support for both procedural and object-oriented programming. C++ is known for its efficiency and control, making it a popular choice for system software, game development, real-time applications, and embedded systems. With features like classes, inheritance, and polymorphism, C++ enables complex program design. The Standard Template Library (STL) provides powerful tools for data structures and algorithms, boosting productivity for developers.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'JS',
		color: 'Yellow',
		description:
			'JavaScript (JS) is a versatile, high-level programming language essential for creating interactive and dynamic web applications. Initially developed by Netscape as a client-side scripting language, it has evolved into a robust, server-side language through environments like Node.js. JS enables developers to implement complex features on web pages, such as animations, form validation, and real-time content updates, enhancing user experience. Its asynchronous capabilities, driven by features like Promises and async/await, allow for efficient handling of operations like data fetching. Additionally, with frameworks and libraries like React, Angular, and Vue.js, JavaScript streamlines the development process and fosters the creation of scalable, modern applications.',
		logo: Assets.Cpp,
		name: 'JS',
		category: 'pro-lang'
	}),





















	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'CSS',
		color: 'pink',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
