import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Persion.css'

const Person = (props) => {
    // font awesome icon set 
    const buttonIcon = <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
    const checkIcon = <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>

    // distructure
    const { name, Skill, sallery, age, img, projectCompete } = props.member;

    return (
        <div className="col-md-4 px-2 py-3">
            <div className=" row-shadow  bg-white">
                <div className="">
                    <img src={img} className="person-img p-0" alt="" />
                </div>
                <div className="">
                    <h5>{name}</h5>
                    <p>Skill : {Skill}</p>
                    <div className="d-flex justify-content-center">
                        <p>Salary :{sallery}$ |</p>

                        <p>|  Age:{age}</p>
                    </div>
                    <p>Project Finish  : {projectCompete} {checkIcon}</p>


                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-info bg-info text-white w-75" onClick={() => props.addMember(name, projectCompete)}>{buttonIcon} <span className="mx-1">ADD to Meeting</span> </button>
                </div>
            </div>

        </div>
    );
};

export default Person;