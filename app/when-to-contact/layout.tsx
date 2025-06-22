import { Metadata } from "next";

// set dynamic metadata
export function generateMetadata(): Metadata {
	return {
		title: 'Спортивная психология | Когда стоит обратиться к психологу',
		description: 'Огромное количество талантливых, перспективных и просто отличных ребят бросают спорт, не видят результата и недооценивают себя и свое место в спорте. Они завершают карьеру еще недостаточно «разогнавшись» для значимого результата и это существенная потеря для будущего спорта.',
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