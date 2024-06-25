type Route = {
	href: string;
	id: string;
	label: string;
	icon?: string;
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
];
