type ProjectRoute = {
	id: string;
	url: string;
	slug: string;
	img?: string;
	title: string;
	desc: string;
	badge?: string;
	target?: string;
};

export const projectRoutes: ProjectRoute[] = [
	{
		url: '/projects/project-one',
		slug: 'project-one',
		id: 'project-one',
		title: 'Project One',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		badge: 'NEW',
		target: '_self',
	},
	{
		url: '/projects/project-two',
		slug: 'project-two',
		id: 'project-two',
		title: 'Project Two',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		badge: 'IN PROGRESS',
		target: '_self',
	},
	{
		url: '/projects/project-three',
		slug: 'project-three',
		id: 'project-three',
		title: 'Project THREE',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		badge: 'TBC',
		target: '_self',
	},
];
