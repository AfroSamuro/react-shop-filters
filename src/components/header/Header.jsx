import './Header.css'
import logo from '../images/logo.svg'

export default function Header() {



    return (
        <header className='header'>
            <div className='header__content'>
                <nav className='header__nav'>
                    <div className='nav__logo'>
                        <div className='logo__img'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='logo__company'>
                            Agency
                        </div>
                    </div>

                    <div className='nav__navigation'>
                        <p className='navigation__about'>
                            About
                        </p>
                        <p className='navigation__services'>
                            Services
                        </p>
                        <p className='navigation__pricing'>
                            Pricing
                        </p>
                        <p className='navigation__blog'>
                            Blog
                        </p>
                    </div>

                    <div className='nav__contact'>
                        <button className='contact__button'>
                            CONTACT
                        </button>
                    </div>
                </nav>

                <div className='header__title'>
                    Portfolio
                </div>
                
                <div className='header__about'>
                    Agency provides a full service range including technical skills, design, business understanding.
                </div>
            </div>
        </header>
    )
}