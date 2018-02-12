import React from 'react';
import Feedback from "./Feedback";

const FeedbackList = (props) => props.data.map((feedback, index) => {
        return (
            <div>
                <Feedback
                    key={index}
                    name={feedback.name}
                    email={feedback.email}
                    company={feedback.company}
                    message={feedback.message}
                />
            </div>
        );
    });

export default FeedbackList;