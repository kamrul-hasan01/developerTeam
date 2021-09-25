import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Persion.css'

const Person = (props) => {
    const buttonIcon = <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
    const checkIcon = <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>

    const { name, Skill, sallery, age, img, projectCompete } = props.member;

    return (
        <div className="col-md-4 p-5">
            <div className="row g-0 row-shadow">
                <div className="col-md-6">
                    <img src={img} className="person-img" alt="" />
                </div>
                <div className="col-md-6 text-start">
                    <h5>{name}</h5>
                    <p>Skill : {Skill}</p>
                    <p>Salary :{sallery} $</p>

                    <p>Age:{age}</p>
                    <p>Project Complete: {projectCompete} {checkIcon}</p>


                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-info bg-info text-white w-75" onClick={() => props.addMember(name, sallery)}>{buttonIcon} <span className="mx-1">ADD to Meeting</span> </button>
                </div>
            </div>

        </div>
    );
};

export default Person;