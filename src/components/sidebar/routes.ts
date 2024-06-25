type Route = {
	href: string;
	id: string;
	label: string;
	icon?: string;
	target?: string;
};

export const routes: Route[] = [
	{
		href: '/',
		id: 'home',
		label: 'Home',
	},
	{
		href: '/projects',
		id: 'projects',
		label: 'Projects',
	},
	{
		href: '/codepens',
		id: 'codepens',
		label: 'Codepens',
	},
	{
		href: '/photography',
		id: 'photography',
		label: 'Photography',
	},
	{
		href: '/music',
		id: 'music',
		label: 'Music',
	},
	{
		href: '/cv',
		id: 'cv',
		label: 'CV',
	},
	{
		href: '/contact',
		id: 'contact',
		label: 'Contact',
	},
];
