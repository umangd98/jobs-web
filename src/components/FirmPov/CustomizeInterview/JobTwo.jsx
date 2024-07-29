import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const JobTwo = () => {
  const [skills, setSkills] = useState(['', '', '']);
  const [questions, setQuestions] = useState(['', '', '']);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const addSkill = () => {
    setSelectedSkills([...selectedSkills, ...skills.filter(skill => skill !== '')]);
    setSkills([...skills, '']);
  };

  const addQuestion = () => {
    setSelectedQuestions([...selectedQuestions, ...questions.filter(question => question !== '')]);
    setQuestions([...questions, '']);
  };

  const skillOptions = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];
  const questionOptions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];

  return (
    <div className=''>
      <div className="flex flex-col w-full items-center p-6 ">
        <div className="p-6 rounded-[20px] w-full border border-gray-300">
          <h2 className="inter text-[36px] font-bold color-green mt-[30px] mb-[30px]">Customize Interview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="inter text-[24px] font-normal color-black">Ideal Skills</h3>
              <p className='inter text-[16px] font-medium color-black mb-[20px]'>Add or search for skills required of the candidate.</p>
              {skills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <select
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="w-full p-2 px-[10px] border border-gray-300 outline-none bg-[#d9ebec] rounded-[15px]"
                  >
                    <option value="">Select</option>
                    {skillOptions.filter(opt => !selectedSkills.includes(opt) || opt === skill).map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
              <div className='flex justify-center items-center'>
                <button onClick={addSkill} className="mt-2 p-3 bg-color-green px-[20px] text-white rounded-[20px] shadow-md">Add another skill</button>
              </div>
            </div>
            <div>
              <h3 className="inter text-[24px] font-normal color-black">Questions</h3>
              <p className='inter text-[16px] font-medium color-black mb-[20px]'>Add custom questions for the candidate interview.</p>
              {questions.map((question, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => handleQuestionChange(index, e.target.value)}
                    className="w-full p-2 border border-gray-300 outline-none bg-[#d9ebec] rounded-[15px]"
                  />
                </div>
              ))}
              <div className='flex justify-center items-center'>
                <button onClick={addQuestion} className="mt-2 p-3 bg-color-green px-[20px] text-white rounded-[20px] shadow-md">Add another question</button>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-[150px]">
            <NavLink to="/add_detail" className="mt-2 p-2 bg-color-green px-[20px] text-white rounded-[20px] shadow-md">Back</NavLink>
            <NavLink to="/senior_product" className="mt-2 p-2 bg-color-green px-[20px] text-white rounded-[20px] shadow-md">Add job</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTwo;
