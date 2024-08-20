import React from 'react';
import '../style/main.css'
import shoes from '../style/web-cu4151-102-p.webp'

const main = () => {
    return (
        <div className='main'>
            <div className='divin'>
                shoes 
                <img src={shoes} alt='chaussure nike' className='shoesun'/>
                <h1>Chaussure</h1>
                </div>
                <a href='https://b301-2a01-e0a-4cc-3700-75ac-abce-9949-7488.ngrok-free.app/'>
                    <div className='divde'>
                shoes 
                <img src={shoes} alt='chaussure nike' className='shoesun'/>
                <h1>Chaussure</h1>
                </div>
                </a>
            
            <div className='divtroy'>
                shoes 
                <img src={shoes} alt='chaussure nike' className='shoesun'/>
                <h1>Chaussure</h1>
                </div>
            
        </div>
    );
};

export default main;