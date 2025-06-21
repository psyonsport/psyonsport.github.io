'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import './sass/index.scss'
import Image from "next/image";
import { ConsultCard } from "./components/consult_card";

const navigation = [
	{ name: "Blog", href: "/blog" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];
// @ts-ignore
export default function Home() {
	const [scrollPositon, setScrollPositon] = useState<number>(0);
	const [isPinkPlaying, setIsPinkPlaying] = useState<boolean>(false);

	useEffect(() => {
		document.addEventListener(`scroll`, (e) => {
			const windowScroll = window.scrollX;
			setScrollPositon(window.scrollY);
			// console.log(scrollPositon);
		})
	}, []);

	useEffect(() => {
		console.log(scrollPositon);
	}, [scrollPositon])

	return (
		<div className="index">
			<div className="layoutTop">
				<div className="content">
					<div className="left">
						<h1 className="animated animatedFadeInUp fadeInUp">
							Индивидуальная <br />консультация<br /> спортивного психолога
						</h1>
						<button className="animated15 animatedFadeInUp fadeInUp">
							<a href="https://t.me/psy_on_sport39" target="_blank">Записаться</a>
						</button>
						<p className="animated2 animatedFadeInUp fadeInUp">
							Мы верим, что успех в <span style={{
								color: '#FFD500'
							}}>спорте</span> — это не только физическая подготовка, но и сильный характер, уверенность, психологическая и ментальная стойкость спортсмена.
							<span style={{
								color: '#FF3380'
							}}>
								Спортивный психолог
							</span>
							может  помочь разобраться в себе, найти ресурсы и преодолеть внутренние барьеры и убеждения
						</p>
					</div>
					<Image className="animated15 animatedFadeInUp fadeInUp" width={541} height={361} src={'main_img.png'} alt={''} />
				</div>
			</div>
			<div className="animated2 animatedFadeInUp fadeInUp" style={{
				paddingTop: 36,
				color: '#FFBDD6',
				fontSize: 36
			}}>

				{
					// @ts-ignore
					<marquee direction="right"
						truespeed={true}
						scrollamount="18">
						поддержка поддержка поддержка поддержка поддержка поддержка
						поддержка поддержка поддержка поддержка поддержка поддержка
						поддержка поддержка поддержка поддержка поддержка поддержка
						поддержка поддержка поддержка поддержка поддержка поддержка
						поддержка поддержка поддержка поддержка поддержка поддержка
						{/* @ts-ignore */}
					</marquee>
				}
			</div>
			<div className="layoutPink">
				<h2 className={scrollPositon >= 100 ? 'animated animatedFadeInUp fadeInUp' : ''} style={{
					color: 'white'
				}}>Многие считают, что...</h2>
				<p className={scrollPositon >= 100 ? 'animated15 animatedFadeInUp fadeInUp' : ''}>
					Успех в спорте зависит преимущественно от физических усилий,
					но в действительности побеждает тот, кто психологически более
					{/* <br /> */}
					подготовлен.
				</p>
				<p className={scrollPositon >= 100 ? 'animated2 animatedFadeInUp fadeInUp' : ''}>
					<span style={{
						color: "#FF88B5"
					}}>
						«В борьбе равных соперников побеждает психология»
					</span>
					<br />основоположник олимпийского движения Пьер де Кубертен
				</p>
			</div>
			<div
				style={{
					display: scrollPositon >= 400 ? 'flex' : 'none'
				}}
				className="layoutThree animated animatedFadeInUp fadeInUp">
				<Image width={407} height={407} src={"three.png"} alt={""} />
				<p className="animated15 animatedFadeInUp fadeInUp">
					Можно ли в глобальном смысле справиться без психологической составляющей?
					<br />
					<br />
					В очень немногих случаях возможно. Но это будут совсем другие сроки, эффективность и затраченные усилия.
					<br />
					<br />
					Целостность подготовки спортсмена это в том числе должный уровень психологической составляющей, который далеко не всегда достигается просто душевным разговором.
				</p>
			</div>

			<div
				style={{
					display: scrollPositon >= 700 ? 'flex' : 'none'
				}}
				className="layoutFour animated animatedFadeInUp fadeInUp">
				<h2>Наши задачи:</h2>
				<div className="top">
					{/* <ConsultCard/>
					<ConsultCard/> */}
					
					{/* <Image width={347} height={257} src={"reason1.png"} alt={""} />
					<Image width={347} height={257} src={"reason2.png"} alt={""} /> */}
					<img src="/reason1.png" style={{
						width: 347,
						height: 257
					}} alt="" />
					<img src="/reason2.png" style={{
						width: 347,
						height: 257
					}} alt="" />
				</div>
				<div className="bottom">

					<Image className="mob" width={350} height={350} src={"reason.svg"} alt={""} />
					{/* <ConsultCard/> */}

					{/* <Image width={347} height={257} src={"reason3.svg"} alt={""} /> */}
					<img src="/reason3.png" style={{
						width: 347,
						height: 257
					}} alt="" />

					<Image className="des" width={350} height={350} src={"reason.svg"} alt={""} />
					{/* <ConsultCard/> */}
					{/* <Image width={347} height={257} src={"reason4.png"} alt={""} /> */}
					
					<img src="/reason4.png" style={{
						width: 347,
						height: 257
					}} alt="" />
				</div>
			</div>
			<div className="layoutSix">
				<h2>
					Начни свой путь к
					<br />
					<span style={{
						color: '#FF3380'
					}}>
						уверенности
					</span> и <span style={{
						color: '#FFD500'
					}}>
						успеху
					</span>!
				</h2>
				{/* <button className="animated15 animatedFadeInUp fadeInUp">
					<a href="https://t.me/psy_on_sport39" target="_blank">Записаться</a>
				</button> */}
			</div>
		</div>
	);
}
