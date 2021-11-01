import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Add.css';

const Add = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => 
  {
    console.log(data);
    axios.post('https://nameless-cove-35810.herokuapp.com/service',data)
    .then(res => {
        console.log(res);
        // console.log(res.data.insertId);
        if(res.data.insertId){
            alert('Inserted successfully');
            reset();
        }
    })

  }

    return (
        <div className="addService">
            <h1>Add a new Service</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price:$")} placeholder="Price" />
                <input {...register("img")}  placeholder="Image"/>
                <input type="submit" className="bg-dark text-white" />
            </form>
        </div>
    );
};

export default Add;