import React from 'react';
import bgImage from '../imgs/bg.jpg'

function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bgImage})`}}>
            <h1>필요한 돈을 환전하십시오.</h1>
            <p>현재 추천하는 은행입니다.</p>
        </div>
    );
}

export default Hero;