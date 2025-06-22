import { Metadata } from "next";

// set dynamic metadata
export function generateMetadata(): Metadata {
	return {
		title: 'Спортивная психология | Наша команда',
		description: 'это группа энтузиастов, объединённых общей целью: помогать спортсменам преодолевать трудности и достигать внутренней гармонии.',
	};
}

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			{children}
		</>
	);
}