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
                <a href='https://eed6-2a01-e0a-4cc-3700-6ab3-d4df-9e37-87f.ngrok-free.app/'>
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