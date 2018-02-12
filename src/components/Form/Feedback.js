import React from 'react';

const Feedback = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.company}</td>
            <td>{props.message}</td>
        </tr>
    );
};

export default Feedback;