import React from 'react';
import { Link } from 'react-router-dom';

function BodyItem(props) {
    return (
        <>
            <li className='body_item'>
                <Link className='body_item_link' to={props.path}>
                    <figure className='body_item_pc_wrap' data-category={props.label}>
                        <img className='body_item_img' alt='Hotel Image' src={props.src}/>
                    </figure>
                    <div className='body_item_info'>
                        <h5 className='body_item_text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default BodyItem;
