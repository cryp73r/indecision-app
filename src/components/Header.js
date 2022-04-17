import React from 'react';

const Header=(props)=>(
    <div className="header">
        <div className='container'>
            <div className="header__sbs">
                <div>
                    <h1 className="header__title">{props.title}</h1>
                    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
                </div>
                <div>
                    <a className="header__logo" title="Source Code" href="https://github.com/cryp73r/indecision-app" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                </div>
            </div>
        </div>
        <div className="container header__credits">
            <h2 className="header__subtitle">Crafted with ❤️ by CRYP73R</h2>
        </div>
    </div>
);

Header.defaultProps ={
    title: 'Cryptask Manager App',
    subtitle: 'Your simple task builder'
}

export default Header;