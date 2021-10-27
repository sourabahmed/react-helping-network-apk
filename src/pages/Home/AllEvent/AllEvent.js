import React from 'react';
import { Link } from 'react-router-dom';

const AllEvent = (props) => {
    const { imgUrl, eventTitle, _id } = props.event;
    console.log(_id);
    // const url = `/register/${_id}};
    return (
        <div>
            <Link to={`/register/${_id}`}>
                <div>
                    <img className="img-fluid" src={imgUrl} alt="" />
                    <h3 className="text-decoration-none">{eventTitle}</h3>
                </div>
            </Link>
       </div>
    );
};

export default AllEvent;
