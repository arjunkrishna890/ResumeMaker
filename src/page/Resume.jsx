import React from 'react';
import { useSelector } from 'react-redux';
import './Resume.scss';

function Resume() {
  const data = useSelector((state) => state.data);
 

  return (
    <div className="resume">
      <div className="resume-header">
        <h1>{data.personal.name}</h1>
        <h3>{data.personal.jobTitle}</h3>
      </div>
      <hr className="resume-divider" />
      <div className="resume-content" >
     
        <div className="left-side">
        <div className="profile-picture">
          {data.file && <img src={URL.createObjectURL(data.file)} alt="Uploaded" />}
            
          </div>
          <div className="contact-details">
            <ul>
              <li><b>Phone:</b>{data.personal.mobile}</li>
              
              <li style={{display:"flex"}}><b>Gender:</b>{data.personal.gender}<b style={{marginLeft:"10px"}}>   Age:</b>{data.personal.mobile}</li>
              <li><b>Address:</b>{data.personal.address}</li>
              <li><b>Languages:</b></li>
              {data.personal.languages.map((item)=>(
                <>
                <li>
                  {item}
              </li>
                </>
              ))}
              <li><b>Skills:</b></li>
              {data.personal.skills.map((item)=>(
                <>
                <li>
                  {item}
              </li>
                </>
              ))}
            </ul>
          </div>
         
        </div>
        <div className="right-side">
        
          <div className="resume-section">
            <h2>Summary</h2>
            <p>{data.personal.summery}</p>
          </div>
          <div className="resume-section">
            <h2>Experience</h2>
            {data.personal.workExperience.map((exp) => (
              <div className="resume-item">
                <h4>{exp.JobTitle}</h4>
                <p>{exp.Employer}</p>
                {/* <p className="date">{exp.date}</p> */}
               
              </div>
            ))}
          </div>
          <div className="resume-section">
            <h2>Education</h2>
            {data.personal.educationalDetails.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.course}</h4>
                <p>{edu.institution}</p>
                {/* <p className="date">{edu.date}</p> */}
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Resume;
