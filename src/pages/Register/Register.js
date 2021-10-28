import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../hook/useAuth';
import './Register.css'

const Register = () => {
    const [event, setEvent] = useState();
    console.log(event);
    const {user} = useAuth();
    const { registerId } = useParams();

    useEffect(() => {
        fetch(`https://thawing-forest-41291.herokuapp.com/${registerId}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://thawing-forest-41291.herokuapp.com/register', {
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
            <h1>Please Register</h1>

            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <input  defaultValue={user.displayName} {...register("fullName")} /> <br />
                <input defaultValue={user.email} {...register("email")} /> <br />
                <textarea defaultValue={event?.description} {...register("eventDescription")} /> <br />
                <input defaultValue={event?.eventTitle} {...register("eventName")} /> <br />
                <input type="date" {...register("date")} /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;