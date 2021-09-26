import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './MeetingMembers.css'

const MeetingMembers = (props) => {
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>


    const { meet } = props;

    return (
        <div className="col-md-12">
            <p className="shadow-lg bg-white text-start ps-5 fs-5">{userIcon}<span className="ps-1">{meet}</span></p>
        </div>

    );
};

export default MeetingMembers;