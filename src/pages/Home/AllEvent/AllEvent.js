import React from 'react';
import { Link } from 'react-router-dom';

const AllEvent = (props) => {
    const { imgUrl, eventTitle, _id } = props.event;
    console.log(_id);
    return (
        <Link to='/register'>
            <div>
                <img className="img-fluid" src={imgUrl} alt="" />
                <h3>{eventTitle}</h3>
            </div>
        </Link>
    );
};

export default AllEvent;
