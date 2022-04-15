import React, { FC } from 'react';
import logo from '../img/logo.svg';

const Header: FC = () => {
    return (
        <header className='mb-3'>
            <a href='/'><img src={logo} alt='joinme.click logo' className='logo'/></a>
        </header>
    );
};

export default Header;
