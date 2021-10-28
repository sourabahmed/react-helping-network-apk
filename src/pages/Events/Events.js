import React from 'react';
import { useForm } from "react-hook-form";
import './Events.css'

const Events = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://thawing-forest-41291.herokuapp.com/events', {
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
        <div className="events">
            <h2>Add an Event</h2>

            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("eventTitle")} placeholder='Event Title'/> <br />
                <textarea {...register("description")} placeholder='Event description'/> <br />
                <input {...register("imgUrl")} placeholder='Image Url'/> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Events;






