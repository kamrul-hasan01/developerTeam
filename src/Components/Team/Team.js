import React, { useEffect, useState } from 'react';
import MeetingMembers from '../MeetingMembers/MeetingMembers';
import Person from '../Person/Person';
import './Team.css'



const Team = () => {
    // for member 
    const [members, setMembers] = useState([]);
    // meeting people add 
    const [meeting, setMeeting] = useState([]);
    //  set project  array 
    const [projectArray, setProjectArray] = useState([]);

    const addMember = (name, salary) => {
        const newArray = [...projectArray, salary];
        setProjectArray(newArray)
        const newMember = [...meeting, name];
        setMeeting(newMember);


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

            })
    }, [])

    return (
        <div className="background-set">


            <div className="d-flex justify-content-center">
                <div className="col-md-5  custom-style  bg-white">
                    <h2>Team member list for meeting</h2>
                    <h4>Total Member : <span className="text-info">{meeting.length}</span> & Sum of Salary : <span className="text-info">{totalProject}</span> </h4>

                    <div className="row px-4 d-flex jusify-content-center">
                        {
                            meeting.map(meet => <MeetingMembers
                                meet={meet}></MeetingMembers>)
                        }
                    </div>

                </div>
            </div>

            <div className="row g-0">
                {
                    members.map(member => <Person
                        member={member}
                        key={member.key} addMember={addMember}></Person>)
                }
            </div>
        </div>
    );
};

export default Team;