import React, { useState } from 'react';
import './Home.scss';
import Stepper from 'react-stepper-horizontal';
import First from './First';
import Form from './Form';
import Resume from './Resume';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFormComplete, setIsFormComplete] = useState(false);
 
  console.log(isFormComplete)
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFormComplete = (complete) => {
    setIsFormComplete(complete);
  };

  return (
    <div className="Home">
      <div className="Box">
        <div className="card">
          <Stepper
            steps={[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' }
            ]}
            activeColor="#9e0c39"
            completeColor="#9e0c39"
            activeStep={currentPage}
          />
          {currentPage === 0 && <First setFormComplete={setIsFormComplete} />}
          {currentPage === 1 && <Form setFormComplete={handleFormComplete} />}
          {currentPage === 2 && <Resume />}
          <div className="buttons">
              <button
              disabled={currentPage === 0}
              size={40}
              color="white"
              onClick={handlePrevious}
            ><FaChevronLeft/></button>
           
            <button
              disabled={currentPage === 2 || !isFormComplete}
              size={40}
              color="white"
              onClick={handleNext}
            ><FaChevronRight/></button>
          </div>
        </div>
      </div>
      <div className="underbox"></div>
    </div>
  );
}

export default Home;
