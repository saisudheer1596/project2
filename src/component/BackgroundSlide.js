import React, { useEffect, useState } from 'react';
import './BackgroundSlide.css';
import backgroundSlide from './Data';


function BackgroundSlider() {
    const [currentState, setCurrentState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0)
            } else {
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [currentState])
    const bgImageStyle = {
        backgroundImage: `url(${backgroundSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }

    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }
    return (
        <div className='container-style' style={{marginTop: '-100px'}}>
            <div style={bgImageStyle}>
                <div className='description'>
                    <div>
                        <h6>CEO ENGINEER</h6>
                        <h2>{backgroundSlide[currentState].title}</h2>
                    </div>
                    <img width='256' height='275' className='attachment-256x275 size-256x275' src={backgroundSlide[currentState].image} alt='none' />
                    <div className='carousel-boullt'>
                        {
                            backgroundSlide.map((backgroundSlide, currentState) => (
                                <span key={currentState} onClick={() => goToNext(currentState)}></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BackgroundSlider