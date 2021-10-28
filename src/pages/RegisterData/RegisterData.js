import React, { useEffect, useState } from 'react';

const RegisterData = () => {
    const [registerData, setRegisterData] = useState([]);
    console.log(registerData);

    useEffect(() => {
        fetch('http://localhost:5000/registerData')
        .then(res => res.json())
        .then(data => setRegisterData(data))
    },[])
    return (
        <div className="m-5 border">
            <h3>Registred</h3>
            <div className="row text-danger p-4">
                <h6 className="col-3">Name</h6>
                <h6 className="col-3">Email</h6>
                <h6 className="col-3">Event</h6>
                <h6 className="col-3">Date</h6>
            </div>
            {
                registerData.map(data => 
                    <div className="row">
                        <h6 className="col-3 my-3">{data.fullName}</h6>
                        <h6 className="col-3">{data.email}</h6>
                        <h6 className="col-3">{data.eventName}</h6>
                        <h6 className="col-3">{data.date}</h6>
                    </div>)
            }
        </div>
    );
};

export default RegisterData;