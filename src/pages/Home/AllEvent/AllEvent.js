import React from 'react';

const AllEvent = (props) => {
    const{imgUrl, eventTitle} = props.event;
    return (
        <div >
            <img className="img-fluid" src={imgUrl} alt="" />
            <h3>{eventTitle}</h3>
        </div>
    );
};

export default AllEvent;