import React from 'react';
import "../Style/Components/Header.css"


const Header = () => {
    return (
        <div className='Header'>
            <img src='.\logo_Wealth_Health.jpg' alt='HRnet' className='Header__logo'/>
            <h1 className='Header__h1'>HRnet</h1>
        </div>
    );
};

export default Header;
