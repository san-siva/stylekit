export const SITE_URL = 'https://stylekit.santhoshsiva.dev';

type SiteMeta = {
	title: string;
	desc: string;
	slug: string;
	keywords: string[];
};

export const generateMetadata = (site: SiteMeta) => ({
	title: site.title,
	description: site.desc,
	keywords: site.keywords,
	authors: [{ name: 'Santhosh Siva' }],
	alternates: {
		canonical: `${SITE_URL}/${site.slug}`,
	},
	openGraph: {
		title: site.title,
		description: site.desc,
		type: 'website' as const,
		url: `${SITE_URL}/${site.slug}`,
	},
	twitter: {
		card: 'summary_large_image' as const,
		title: site.title,
		description: site.desc,
	},
});

export const STYLEKIT: SiteMeta = {
	title: 'StyleKit - Documentation',
	desc: 'A modular SCSS design system with utilities, colors, typography, and animations',
	slug: '',
	keywords: [
		'SCSS',
		'design system',
		'CSS',
		'typography',
		'colors',
		'utilities',
		'animations',
		'front-end',
	],
};
