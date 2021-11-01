import React, { useEffect, useState } from 'react';
import Traveller from '../Components/Traveller/Traveller';
import './Travellers.css'
const Travellers = () => {
    const [travellers,setTravellers] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setTravellers(data))
    },[])

    return (
        <div className="mt-5">
            <h6>Our Traveller Say</h6>
            <h1>What Oue Traveller Say About Us</h1>
             <div className="detail">
                {
                    travellers.map(traveller => <Traveller key={traveller.id} traveller={traveller}></Traveller>)
                }
             </div>
             
                
                
             
            
        </div>
    );
};

export default Travellers;