
import Link from 'next/link';
import './../sass/footer.scss';
import Image from 'next/image';

export const Footer: React.FC = () => {
    return (
        <>
            <footer className='footer'>
                <div className="center">
                    <div className='item'>
                        <Image width={30} height={30} src={'telegram.svg'} alt={'oops..'} />
                        <p>
                            <a href="https://t.me/psy_on_sport39">https://t.me/psy_on_sport39</a>
                        </p>
                    </div>
                    <div className='item'>
                        <Image width={30} height={30} src={'vk.svg'} alt={'oops..'} />
                        <p>
                            <a href="https://m.vk.com/@psy_on_sport39">@psy_on_sport39</a>
                        </p>
                    </div>
                    <div className='item'>
                        <Image width={30} height={30} src={'email.svg'} alt={'oops..'} />
                        <p>
                            <a href="mailto:psy.on.sport@gmail.com">psy.on.sport@gmail.com</a>
                        </p>
                    </div>
                </div>

            </footer>
            <nav className="bottom-nav">
                <Link href={`https://t.me/psy_on_sport39`}><p className="active" >Контакты</p></Link>
                <Link href={`/about`}><p >О проекте</p></Link>
                <Link href={`https://t.me/psy_on_sport39`}><p >Мероприятия</p></Link>

                <Link href={`/teams`}><p >Команда проекта</p></Link>
                <Link href={`/when-to-contact`}><p >Когда стоит обратиться к специалисту?</p></Link>
            </nav>
        </>
    );
};