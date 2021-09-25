import React, { useEffect, useState } from 'react';
import MeetingMembers from '../MeetingMembers/MeetingMembers';
import Person from '../Person/Person';
import './Team.css'



const Team = () => {
    let pre = 0;
    // let totalSalary = 0;
    const [members, setMembers] = useState([]);
    const [meeting, setMeeting] = useState([]);
    const [totalSalary, setTotalSalary] = useState(0);

    const addMember = (name, salary) => {

        console.log(salary)
        pre = pre + salary;
        console.log(pre)
        setTotalSalary(pre)
        const newMember = [...meeting, name];
        setMeeting(newMember);

    }



    useEffect(() => {
        fetch('https://k17h02.github.io/api/userDtails.json')
            .then(res => res.json())
            .then(data => {
                setMembers(data)
                console.log(data)
            })
    }, [])

    return (
        <div>

            <div className="d-flex justify-content-center">
                <div className="col-md-3  custom-style">
                    <h2>Total Member :{meeting.length}</h2>
                    <h2>Sum of Salary :{totalSalary}</h2>
                    <div className="col-md-8">
                        {
                            meeting.map(meet => <MeetingMembers
                                meet={meet}></MeetingMembers>)
                        }
                    </div>
                    {/* <button className="m-5">Call now</button> */}
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