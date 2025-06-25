"use client";
// @ts-ignore
import './teams.scss';
import Image from 'next/image';

export default function Example() {


	return (
		<div className="teams">
			<div className="header">
				<h1>
					Наша команда —
				</h1>
				<p>
					это группа энтузиастов, объединённых общей целью: помогать спортсменам преодолевать трудности и достигать внутренней
					<br />
					гармонии.
				</p>
			</div>
			<div className="main">
				<Image src="team/gladis.png"
					width={561}
					height={510}
					alt="" />
				<div className="gladis">
					<h2>
						Тренер олимпийского тхэквондо.
						Лучший инструктор ФК в России.
						Лучший инструктор ФК г. Калининграда и Калининградской области.
						Награждена Почетной грамотой Министерства просвещения РФ
					</h2>
					<p>
						«За добросовестный труд, достижения и заслуги в сфере образования»
					</p>
				</div>
			</div>
			<div className="card-container">
				<Image src="team/irina.png"
					width={561}
					height={510}
					alt="" />
				<Image src="team/ijan.png"
					width={561}
					height={510}
					alt="" />
				<Image src="team/lexa.png"
					width={561}
					height={510}
					alt="" />
				<Image src="team/varya.png"
					width={561}
					height={510}
					alt="" />
				<Image src="team/katya.png"
					width={561}
					height={510}
					alt="" />
				<Image src="team/jenya.png"
					width={561}
					height={510}
					alt="" />
			</div>
			<div className="question">
				<Image src="/question.png"
					width={447}
					height={447}
					// style={{
					// 	height: 447,
					// 	width: 447,
					// 	aspectRatio: 1
					// }} 
					alt="" />
				<p>
					<span style={{
						fontWeight: 'bold'
					}}>
						Мы понимаем
					</span>,
					что спортсмены сталкиваются с уникальными вызовами и стрессами, которые требуют особого подхода.
					<br /><br />
					Наши специалисты имеют опыт работы с людьми, занимающимися спортом, и знают, как помочь им справиться с психологическими трудностями.
				</p>
			</div>
			<div className="bottom">
				<p>
					Мы верим, что каждый спортсмен способен на позитивные изменения и личностный рост. Наша задача — создать безопасное пространство, в котором вы сможете разобраться в своих чувствах и эмоциях, найти внутренние ресурсы и научиться применять их для улучшения своей жизни и спортивных результатов.
				</p>
			</div>
		</div>
	);
}
