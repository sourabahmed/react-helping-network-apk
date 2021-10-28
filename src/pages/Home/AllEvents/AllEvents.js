import React, { useEffect, useState } from 'react';
import AllEvent from '../AllEvent/AllEvent';
import './AllEvents.css'

const AllEvents = () => {
    const [events, setEvents] = useState();
    useEffect(() => {
        fetch('https://thawing-forest-41291.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className="m-5">
            <div className="grid">
                {
                    events?.map(event => <AllEvent
                        key={event._id}
                        event={event}
                    ></AllEvent>)
                }
            </div>
        </div>
    );
};

export default AllEvents;

