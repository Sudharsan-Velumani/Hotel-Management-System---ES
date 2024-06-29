import React from 'react';
import '../App.css';
import { Button } from './Button';
import video from './videos/Trailer.mp4';
import './Content.css';

function Content() {
    return (
        <div className='content-container'>
            <video src={video} autoPlay loop muted />
            <h1>Welcome To  Royal Cherry Hotels</h1>
            <p>Luxury Is Not A Place It's An Experience !!</p>
            <div className='content-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default Content;
