import React from 'react';
import { useForm } from "react-hook-form";

const Events = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/events', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h2>This is events</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("eventTitle")} placeholder='Event Title'/> <br />
                <textarea {...register("description")} placeholder='Event description'/> <br />
                <input {...register("imgUrl")} placeholder='Image Url'/> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Events;






