import { Metadata } from "next";

// set dynamic metadata
export function generateMetadata(): Metadata {
	return {
		title: 'Спортивный психолог г.Калининград - Контакты',
		description: 'Спортивный психолог принимает по адресу г. Калининград, Ленинский проспект 131, кабинет 408 (БЦ Панорама)',
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