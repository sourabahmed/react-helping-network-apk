import React from 'react';
import { Link } from 'react-router-dom';

const AllEvent = (props) => {
    const { imgUrl, eventTitle, _id } = props.event;
    console.log(_id);
    // const url = `/register/${_id}};
    return (
        <div>
            <Link className="text-decoration-none" to={`/register/${_id}`}>
                <div>
                    <img className="img-fluid" src={imgUrl} alt="" />
                    <h3 >{eventTitle}</h3>
                </div>
            </Link>
       </div>
    );
};

export default AllEvent;
