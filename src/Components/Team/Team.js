import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faUserCheck, faTasks } from '@fortawesome/free-solid-svg-icons';
import MeetingMembers from '../MeetingMembers/MeetingMembers';
import Person from '../Person/Person';
import './Team.css'



const Team = () => {
    //  font awesome icon   set
    const meetingButtonIcon = <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
    const userIcon = <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>
    const taskIcon = <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>

    // for member 
    const [members, setMembers] = useState([]);
    // meeting people add 
    const [meeting, setMeeting] = useState([]);
    //  set project  array 
    const [projectArray, setProjectArray] = useState([]);

    const addMember = (name, salary) => {
        if (!meeting.includes(name)) {
            const newArray = [...projectArray, salary];
            setProjectArray(newArray)
            const newMember = [...meeting, name];
            setMeeting(newMember);
        }




    }
    let totalProject = 0;
    projectArray.forEach(x => {
        totalProject += x;

    })



    useEffect(() => {
        fetch('https://k17h02.github.io/api/userDtails.json')
            .then(res => res.json())
            .then(data => {
                setMembers(data)
                console.log(data)

            })
    }, [])

    return (
        <div className="background-set ">


            <div className="container">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="row g-0">
                            {
                                members.map(member => <Person
                                    member={member}
                                    key={member.key} addMember={addMember}></Person>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12  custom-style  bg-light ms-5 sticky-top">
                            <h2 className="shadow-lg p-2 rounded bg-white">List for Meeting</h2>
                            <h4 >{userIcon}Total Member : <span className="text-info">{meeting.length}</span> </h4>
                            <h4 >{taskIcon} Total Project : <span className="text-info">{totalProject}</span> </h4>

                            <div className="row px-4 d-flex jusify-content-center">
                                {
                                    meeting.map(meet => <MeetingMembers
                                        meet={meet}></MeetingMembers>)
                                }
                            </div>
                            <button type="button" className="btn btn-outline-info bg-info text-white w-50 rounded" >{meetingButtonIcon} <span className="mx-1">Start Meeting</span> </button>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Team;