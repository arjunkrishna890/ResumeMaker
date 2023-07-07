import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import './Form.scss';
import { setAge, setGender, setMobile, setAddress, addLanguage, removeLanguage,addSkill,removeSkill,addEducationalDetail,
  removeEducationalDetail,addWorkexperienceDetail,
  removeWorkexperienceDetail,setImageFile,setSummery } from '../store/dataslice';
import { FaPlus } from "react-icons/fa";
import { GrClose} from "react-icons/gr";

function Forms() {
  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();
  
  const [inputLanguage, setInputLanguage] = useState('');
  const [inputSkills, setInputSkill] = useState('');
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [Employer, setEmployer] = useState("");

//gender
  const handleOptionChange = (event) => {
    dispatch(setGender(event.target.value));
    
  };
//age
  const handleInputAgeChange = (e) => {
    dispatch(setAge(e.target.value))
  };
  //summery
  const handleInputSummeryChange = (e) => {
    dispatch(setSummery(e.target.value))
  };
//number
  const handleInputNumberChange = (e) => {
    dispatch(setMobile(e.target.value))
  };
//address
  const handleInputAddressChange = (e) => {
    dispatch(setAddress(e.target.value))
  };

  const handleAddLanguage = () => {
    if (inputLanguage.trim() !== '') {
      dispatch(addLanguage(inputLanguage));
      setInputLanguage('');
    }
  };

  const handleRemoveLanguage = (language) => {
    dispatch(removeLanguage(language));
  };

//skill
  const handleAddSkill = () => {
    if (inputSkills.trim() !== '') {
      dispatch(addSkill(inputSkills));
      setInputSkill('');
    }
  };

  const handleRemoveSkill = (skill) => {
    dispatch(removeSkill(skill));
  };
  



  const handleAddEducationalDetail = () => {
    const newDetail = {
      id: Date.now(), // Unique ID for each detail
      institution,
      course,
    
    };

    dispatch(addEducationalDetail(newDetail));

    // Clear input fields
    setInstitution("");
    setCourse("");
  };

  const handleRemoveEducationalDetail = (id) => {
    dispatch(removeEducationalDetail(id));
  };



  //WorkExperience;
  const handleAddWorkExperienceDetail = () => {
    const newDetails = {
      id: Date.now(), // Unique ID for each detail
      JobTitle,
      Employer
    
    };

    dispatch(addWorkexperienceDetail(newDetails));

    setJobTitle("");
    setEmployer("");
  };

  const handleRemoveWorkexperienceDetail = (id) => {
    dispatch(removeWorkexperienceDetail(id));
  };
  //image
 

  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      dispatch(setImageFile(file));
    };

  return (
    <div className='container'>
      <div style={{display:"flex",width:"100rem"}}>

      <div className='leftside'>
      <h3>Personal Details</h3>
        <div className='section1'>
          <div className='inputfield'>
            <label>Name:</label>
            <input value={data.personal.name} on/>
          </div>
          <div className='inputfield'>
            <label>Age:</label>
            <input type='number'onChange={handleInputAgeChange} value={data.personal.age} placeholder='Enter your age' />
          </div>
          <div className='inputfield-2'>
           
            <label>
              <input
                type="radio"
                value="Male"
                checked={data.personal.gender === 'Male'}
                onChange={handleOptionChange}
              />
              <span className='gender'>Male</span> 
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={data.personal.gender === 'Female'}
                onChange={handleOptionChange}
              />
              <span className='gender'>Female</span>
            </label>
            <label className='phonelabel'>Phone:</label>
            <input className='phone' type='number' onChange={handleInputNumberChange} value={data.personal.mobile} placeholder='Enter your Number' />
          </div>
          <div className='inputfield-4'>
            <label>Address:</label>
            <textarea onChange={handleInputAddressChange} value={data.personal.address}></textarea>
          </div>
        </div>
  
        <div className='section2'>
          <div className='languages'>
            <label>Languages:</label>
            <div style={{display:"flex",flexWrap:"wrap"}}>
            {data.personal.languages.map((language, index) => (
              <div key={index}>
                 <Button size='mini'rounded style={{backgroundColor:"#9e0c39",color:"white",marginTop:"1px",borderRadius:"50px"}} compact>{language} </Button>
                <GrClose onClick={() => handleRemoveLanguage(language)}/>
              </div>
            ))}
            </div>
            
            <div>
              <input
                type='text'
                value={inputLanguage}
                onChange={(e) => setInputLanguage(e.target.value)}
              />
              <FaPlus size={20} color='#9e0c39' onClick={handleAddLanguage}/>
            </div>
          </div>
          <div className='skills'>
            <label>Skills:</label>
            <div style={{display:"flex",flexWrap:"wrap"}}>
            {data.personal.skills.map((skill, index) => (
              <div key={index} style={{display:"flex"}}>
                <Button size='mini'rounded style={{backgroundColor:"#9e0c39",color:"white",marginTop:"1px",borderRadius:"50px"}} compact>{skill} </Button>
                <GrClose onClick={() => handleRemoveSkill(skill)}/>
              </div>
            ))}
            </div>
            
            <div>
              <input
                type='text'
                value={inputSkills}
                onChange={(e) => setInputSkill(e.target.value)}
              />
              <FaPlus size={20} color='#9e0c39' onClick={handleAddSkill}/>
            </div>
          </div>
          <label>Image upload</label>
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>
      <div class="headerDivider"></div>
      <div className='rightside'>
          <div className='education'>
          <div className="educational-details">
           
            <h3>Educational Details</h3>
            <div style={{}}>
            {data.personal.educationalDetails.map((detail) => (
              <div key={detail.id} className="detail" >
                  <GrClose onClick={() => handleRemoveEducationalDetail(detail.id)}/>
                  <input type='text'  value={detail.course} q/>
                  <input type='text'  value={detail.institution}/>
              </div>
            ))}
            </div>
           

            <div className="new-detail" style={{display:"flex"}}>
              <input
                type="text"
                
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="Institution"
              />
              <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Course"
              />
              <FaPlus size={20} color='#9e0c39' onClick={handleAddEducationalDetail}/>
            </div>
          </div>

          
            <textarea onChange={handleInputSummeryChange} placeholder='Summery about yourself' value={data.personal.summery}></textarea>
        </div>
      </div>
      <div class="headerDivider"></div>
      <div className='extreme-right'>
          <div className='workexperience'>
              <h3>WorkExperience Details</h3>
                {data.personal.workExperience.map((detail) => (
                  <div key={detail.id} className="detail">
                    <input type='text'  value={detail.JobTitle}/>
                   <input type='text'  value={detail.Employer}/>
                    <GrClose onClick={() => handleRemoveWorkexperienceDetail(detail.id)}/>
                  </div>
                ))}

                <div className="new-detail">
                  <input
                    type="text"
                    value={JobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Jobtitle"
                  />
                  <input
                    type="text"
                    value={Employer}
                    onChange={(e) => setEmployer(e.target.value)}
                    placeholder="Employer"
                  />
                  <FaPlus size={20} color='#9e0c39' onClick={handleAddWorkExperienceDetail}/>
                </div>
              </div>
              
      </div>
   
      </div>
      
  
    </div>
  );
  
}

export default Forms  

