import React, { useState } from 'react';
import Service from '../Service/Service';



const Services = () => {
    const [services, setServices] = useState([])
    fetch("service.json")
        .then(res => res.json())
        .then(data => setServices(data))
    return (
        <div className='container-fluid mt-3 my-5'>
            <h2 className='text-center'>Services</h2>
            <div className='row d-flex justify-content-evenly'>

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }


            </div>
        </div>
    );
};

export default Services;