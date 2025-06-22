import { Metadata } from "next";

// set dynamic metadata
export function generateMetadata(): Metadata {
	return {
		title: 'Спортивная психология | Наша команда',
		description: 'это группа энтузиастов, объединённых общей целью: помогать спортсменам преодолевать трудности и достигать внутренней гармонии.',
	};
}

// Спортивный психолог принимает по адресу г. Калининград, Ленинский проспект 131, кабинет 408 (БЦ Панорама)

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			{children}
		</>
	);
}