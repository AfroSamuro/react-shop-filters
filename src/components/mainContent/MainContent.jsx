import './MainContent.css'

export default function MainContent() {



    return (
        <article className='content'>
            <nav className='content__nav'>
                <select className='nav__select'>
                    <option value="all">
                        Show All
                    </option>
                    <option value="design">
                        Design
                    </option>
                    <option value="branding">
                        Branding
                    </option>
                    <option value="illustration">
                        Illustration
                    </option>
                    <option value="motion">
                        Motion
                    </option>
                </select>

                <div className='nav__box'>
                    <p className='all'>
                        Show All
                    </p>
                    <p className='design'>
                        Design
                    </p>
                    <p className='branding'>
                        Branding
                    </p>
                    <p className='illustration'>
                        Illustration
                    </p>
                    <p className='motion'>
                        Motion
                    </p>
                </div>
            </nav>
            <main className='content__product'>
                
            </main>
        </article>
    )
}