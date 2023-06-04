import './index.css'
import telegram from './img/telegram.svg';
import whatsapp from './img/whatsapp.svg';
import vk from './img/vk.svg';
import viber from './img/viber.svg';
import instagram from './img/instagram.svg';
import {Logo} from '../Logo/Logo'
export function Footer() {
    return <footer className='footer'>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__col'>
                    <Logo></Logo>
                    <p className='footer__copyright'>DogFood market</p>
                </div>
                <div className='footer__col'>
                    <nav className='menu-bottom'>
                        <a href='/' className='menu-bottom__item'>Catalog</a>
                        <a href='/' className='menu-bottom__item'>Sales</a>
                        <a href='/' className='menu-bottom__item'>News</a>
                        <a href='/' className='menu-bottom__item'>Rewies</a>
                    </nav>
                </div>
                <div className='footer__col'>
                <nav className='menu-bottom'>
                        <a href='/' className='menu-bottom__item'>Payment</a>
                        <a href='/' className='menu-bottom__item'>FAQ</a>
                        <a href='/' className='menu-bottom__item'>Feedback</a>
                        <a href='/' className='menu-bottom__item'>Contacts</a>
                    </nav>
                </div>
                <div className='footer__col'>
                    <div className='contacts'>
                        +7 900 00-00-00
                        <ul className='socials contacts_socials'>
                            <li className=''>
                                <a href='/'>
                                    <img src={telegram} alt="" />
                                </a>
                            </li>
                            <li className=''>
                                <a href='/'>
                                    <img src={instagram} alt="" />
                                </a>
                            </li>
                            <li className=''>
                                <a href='/'>
                                    <img src={vk} alt="" />
                                </a>
                            </li>
                            <li className=''>
                                <a href='/'>
                                    <img src={viber} alt="" />
                                </a>
                            </li>
                            <li className=''>
                                <a href='/'>
                                    <img src={whatsapp} alt="" />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </footer>
  }