import React from 'react';
import './MeetingMembers.css'

const MeetingMembers = (props) => {

    const { meet } = props;
    return (
        <ul >
            <li>
                Name :{meet}
            </li>
        </ul>

    );
};

export default MeetingMembers;