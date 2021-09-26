import React from 'react';
import './MeetingMembers.css'

const MeetingMembers = (props) => {


    const { meet } = props;

    return (
        <div className="col-md-4">
            <p>{meet}</p>
        </div>

    );
};

export default MeetingMembers;