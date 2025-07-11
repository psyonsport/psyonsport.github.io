"use client";
import { SendButton } from '../components/sendButton';
import './whet-to-contact.scss';
import Image from 'next/image';

export default function Example() {


	return (
		<div className="when-to-contact">
			<div className="header">

				<Image src={'when/when.svg'}
					width={812}
					height={541}
					alt={''} />
				<div className="bottom">
					<p className="ql">«</p>
					<p className='text'>
						Огромное количество талантливых, перспективных и просто
						<br /> отличных ребят бросают спорт, не видят результата
						<br />
						и недооценивают себя и свое место в спорте. Они завершают карьеру
						<br />
						еще недостаточно «разогнавшись» для значимого результата и
						<br />
						это существенная потеря для будущего спорта.
					</p>
					<p className="qr">«</p>
				</div>
			</div>

			<div className="question">
				<h2>
					Почему недооценивают психологическую подготовку?
				</h2>
			</div>

			<div className="askq">
				<Image src={'when/ask1.png'}
					width={350}
					height={255}
					alt={''} />
				<div className="center">
					<Image src={'when/ask2.png'}
						width={347}
						height={236}
						alt={''} />
					<Image src={'when/askq.png'}
						width={359}
						height={359}
						alt={''} />
				</div>
				<Image src={'when/ask3.png'}
					width={346}
					height={260}
					alt={''} />
			</div>

			<div className="question2">
				<h3>
					<span style={{
						color: '#FF88B5',
						fontWeight: 'bolder'
					}}>Психологическая подготовка</span> - это не только мотивация и позитивный
					настрой.
					<br /> Это очень конкретные техники, способы и шаги.
				</h3>
			</div>

			<div className="mark">
				<h1>
					Ниже представлена памятка, которая поможет вам понять, в каких ситуациях стоит обратиться к специалисту. Помните, что забота о своём психологическом здоровье — это важный шаг на пути к успеху в спорте.
				</h1>
				<div className="bottom">
					<div className="block">
						<p>
							<span>
								1. Вы чувствуете эмоциональное
								выгорание или потерю мотивации.
							</span>
							<br />
							Если тренировки и соревнования перестали приносить радость, а мотивация заниматься спортом иссякла, это может быть сигналом для обращения к психологу.
						</p>
						<p>
							<span>
								2. Вы испытываете
								предстартовый мандраж или страх неудачи.
							</span>
							<br />
							Если перед соревнованиями вы чувствуете сильное волнение, тревогу или боитесь не оправдать ожидания, специалист может помочь вам справиться с этими эмоциями.
						</p>
						<p>
							<span>
								3. У вас возникли проблемы с
								концентрацией и вниманием во время тренировок или соревнований.
							</span>
							<br />
							Если вам трудно сосредоточиться на задаче, быстро реагировать на изменения ситуации или принимать решения в условиях стресса, психолог может предложить методы для улучшения концентрации.
						</p>
					</div>

					<Image src={'when/faq.png'}
						width={389}
						height={767}
						alt={''} />

					<div className="block">
						<p>
							<span>
								4. Вы переживаете травму или
								неудачу в спорте.
							</span>
							<br />
							Травмы, поражения в важных соревнованиях или другие неудачи могут стать причиной стресса и разочарования. Специалист может помочь вам преодолеть эти эмоции и вернуться к активной спортивной жизни.
						</p>
						<p>
							<span>
								5. У вас есть проблемы с
								самодисциплиной и управлением временем.
							</span>
							<br />
							Если вам сложно придерживаться режима тренировок, правильно распределять время между спортом и другими аспектами жизни или преодолевать лень и прокрастинацию, психолог может предложить стратегии для улучшения самодисциплины.
						</p>
						<p>
							<span>
								6. Вы чувствуете, что не можете
								достичь желаемых результатов самостоятельно.
							</span>
							<br />
							Если вы понимаете, что не можете преодолеть психологические барьеры и улучшить свои спортивные достижения без посторонней помощи, не стесняйтесь обратиться к специалисту. Он может предложить новые подходы и техники для достижения ваших целей.
						</p>
					</div>
				</div>
			</div>

			<div className="end">
				<p>
					В рамках реализации грантового проекта вы можете получить <span style={{
						fontWeight: 'bold'
					}}>бесплатную </span> 
					консультацию <span style={{
						color: '#FF88B5',
						fontWeight: 'bold'
					}}>спортивного психолога</span>  и подать заявку на проведение <span style={{
						fontWeight: 'bold'
					}}>бесплатного</span> тренинга или семинара для вашей команды.
				</p>
			</div>
			<div className="reverse">
				<SendButton/>
			</div>
		</div>
	);
}
