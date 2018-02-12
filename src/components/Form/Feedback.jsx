import React from 'react';

const Feedback = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.company}</p>
            <p>{props.message}</p>
        </div>
    );
};

export default Feedback;