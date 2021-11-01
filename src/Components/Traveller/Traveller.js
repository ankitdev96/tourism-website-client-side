import React from 'react';
import './Traveller.css';

const Traveller = (props) => {
    const {traveller} = props;
     const {name,description,img,Id} = traveller;

    return (
        
        <div className="mt-5">
          {/* <h1>This is a service</h1> */}
          <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            </div>
        </div> 
        
    );
};

export default Traveller;