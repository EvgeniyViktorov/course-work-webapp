import React from 'react';
import Feedback from "./Feedback";

const FeedbackList = (props) => props.data.map((feedback, index) => {
    return (
                <Feedback
                    key={index}
                    id={index + 1}
                    name={feedback.name}
                    email={feedback.email}
                    company={feedback.company}
                    message={feedback.message}
                />
    );
});

export default FeedbackList;