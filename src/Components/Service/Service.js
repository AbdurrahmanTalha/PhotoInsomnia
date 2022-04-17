import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"
const Service = ({service}) => {
    const { img, price, name } = service;
    const navigate = useNavigate()
    return (
        <div className='service'>
            <img src={img} alt=""></img>
            <div className='service-info'>
                <p className='service-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => navigate("/checkout")} className='btn-cart'>
                <p className='btn-text'>Go to checkout</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Service;