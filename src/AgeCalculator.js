import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    const ageDiff = today - birth;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <div>
        <p>Enter your date of birth:</p>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={calculateAge}
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          Calculate Age
        </button>
      </div>
      {age !== '' && <p>You are {age} years old.</p>}
    </div>
  );
}

export default AgeCalculator;