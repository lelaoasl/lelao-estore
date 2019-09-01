import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage' >
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content' >
                    <h1 classname='title'>BIKES</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content' >
                    <h1 classname='title'>WATCHES</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content' >
                    <h1 classname='title'>CLOTHES</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content' >
                    <h1 classname='title'>ACESSORIES</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
        

)

export default HomePage;
