import React from 'react';
// style="width: 18rem;
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    // const { _id, name, price, description, img } = service;


    return (
        <div>
           {/* <h1>All Service</h1> */}
           <div className="service pb-3">
            <img src={service.img} alt="" />
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p className="px-3">{service.description}</p>
            <Link to={`/buy/${service._id}`}> 
                 <button className="btn btn-warning">Book Now</button>
            </Link> 
        </div>
        </div>
    );
};

export default Service;