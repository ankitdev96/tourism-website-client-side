import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    const [orders,setOrders] = useState([]);

    useEffect(() => {
        fetch('https://nameless-cove-35810.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    const handleDelete = (id) => {
        const url = `https://nameless-cove-35810.herokuapp.com/orders/${id}`;

        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining);
                alert('Are You Wanted to delete?');
            }
        });

        
       

    }
    return (
        <div>
            <h1>My Orders:</h1>
            {
                orders.map(order => 
                    <div key={order._id}>
                        <h3>{order.order.name}</h3>
                        <Button onClick={() => {
                            handleDelete(order._id)}}>Delete</Button>

                    </div>)
            }
        </div>
    );
};

export default MyOrders;