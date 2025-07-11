"use client";
// @ts-ignore
import { ArrowLeft, ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import '../sass/nav.css';
import styles from './../sass/nav.module.scss';
import Image from "next/image";

type props = {
	canGoBack?: boolean;
};

export const Navigation: React.FC = ({ canGoBack }: props) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [burger, setBurger] = useState<boolean>(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const toggleBurger = () => {
		setBurger(!burger)
	}

	return (
		<>
			<header ref={ref} className={styles.navbar}>
				<div className={styles.layout}>
					<Image src='favicon.svg' width={50} height={50} alt="" />
					<div className={styles.middle}>
						<Link href={`/`}>
							<p >Главная</p>
						</Link>
						<Link href={`/about`}><p>О проекте</p></Link>
						<Link href={`/teams`}><p>Наша команда</p></Link>
						<Link href={`/when-to-contact`}><p>Здесь о полезном</p></Link>
					</div>
					<div onClick={toggleBurger} className={styles.burger}>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className={styles.contactme}>
						<Image width={30} height={30} src={'telegram.svg'} alt={'oops..'} />
					</div>
				</div>
				{burger ?
					<div className={styles.menu} >
						<div className={styles.close}>
							<X onClick={toggleBurger} />
						</div>
						<Link href={`/`}>
							<p className="link" onClick={toggleBurger}>Главная</p>
						</Link>
						<Link href={`/about`}><p className="link" onClick={toggleBurger}>О проекте</p></Link>
						<Link href={`/teams`}><p className="link" onClick={toggleBurger}>Наша команда</p></Link>
						<Link href={`/when-to-contact`}><p className="link" onClick={toggleBurger}>Здесь о полезном</p></Link>
						<br />
					</div> : null
				}
			</header>

		</>

	);
};
