import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"
const Service = ({service}) => {
    const { img, price, name, desc } = service;
    const navigate = useNavigate()
    return (
        <div className='service col-md-3 mb-5'>
            
                <div className='d-flex justify-content-center align-items-center '>
                    <img src={img} className='img-fluid img-thumbnail' alt=""></img>
                </div>
                <div className='service-info'>
                    <p className='service-name'>{name}</p>
                    <p>Price: {price}</p>
                    <p>{desc}</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={() => navigate("/checkout")} className='btn-cart'>
                        <p className='btn-text'>Go to checkout</p>

                    </button>
                </div>
            
        </div>
    );
};

export default Service;