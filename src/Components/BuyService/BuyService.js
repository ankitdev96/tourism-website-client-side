import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './BuyService.css';

const BuyService = () => {
    const {serviceId} = useParams();
    const [service,setService] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

   
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
         .then(res => res.json())
         .then(data =>setService(data))

    },[])  
    
    const onSubmit = (data) => {
        const getOrder = service;
        // console.log(getOrder);

        data.order = getOrder;

       console.log(data);

            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        alert('Order processed Successfully');
                        
                        reset();
                    }
                    console.log(result);
                })

    }

    return (
        <div>
            <h1>Buy a service: </h1>
            <h1>Deatils of : {service.name} </h1>
            <p>Description: {service.description}</p>
            <img src={service.img} alt="" />

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default BuyService;