import React, { useEffect, useState } from 'react';
import MeetingMembers from '../MeetingMembers/MeetingMembers';
import Person from '../Person/Person';
import './Team.css'



const Team = () => {


    const [members, setMembers] = useState([]);
    const [meeting, setMeeting] = useState([]);
    const [salaryArray, setSalaryArray] = useState([]);

    const addMember = (name, salary) => {



        const value = [...salaryArray, salary];



        setSalaryArray(value)

        const newMember = [...meeting, name];
        setMeeting(newMember);


    }
    let totalSalary = 0;
    salaryArray.forEach(x => {
        totalSalary += x;

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
                <div className="col-md-3  custom-style  bg-white">
                    <h2>Total Member :{meeting.length}</h2>
                    <h2>Sum of Salary :{totalSalary}</h2>
                    <div className="col-md-8">
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