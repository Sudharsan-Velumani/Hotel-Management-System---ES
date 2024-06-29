import React from 'react';
import './body.css';
import BodyItem from './bodyitems';
import pic0 from '../images/OverseasAttractions.jpg';
import pic1 from '../images/Restaurant.jpg';
import pic2 from '../images/bar.jpg';
import pic3 from '../images/spa.jpg';
import pic4 from '../images/Conference Room.jpg';

function Body() {
    return (
        <div className='body'>
            <h1>Have a look at our place!</h1>
            <div className='body_container'>
                <div className='body_wrapper'>
                    <ul className='body_items'>
                        <BodyItem
                            src={pic0}
                            text='Check out our hotel wonderful view '
                            label='View'
                            path='/Services'
                        />
                        <BodyItem
                            src={pic1}
                            text='Dine in our World Class Restaurant'
                            label='Food'
                            path='/Services'
                        />
                    </ul>
                    <ul className='body_items'>
                        <BodyItem
                            src={pic2}
                            text='With your friends and love, share your evening in the bar '
                            label='Beverage'
                            path='/Services'
                        />
                        <BodyItem
                            src={pic3}
                            text='Our massages are like nothing you’ve ever experienced before!'
                            label='Relaxation'
                            path='/Services'
                        />
                        <BodyItem
                            src={pic4}
                            text='A Celebration of Success @ Our Conference Rooms'
                            label='Meetings'
                            path='/Services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Body;
