import React, { useState, useRef } from 'react';

const OTPInputs: React.FC<{ length?: number }> = ({ length = 4 }) => {
  const [otp, setOTP] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>(Array(length).fill(null));

  const handleInputChange = (index: number, value: string) => {
    if (!isNaN(Number(value))) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus(); 
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus(); 
    }
  };

  return (
    <div className="otp-input-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)} 
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={`otp-input${digit ? ' active' : ''}`} 
        />
      ))}
    </div>
  );
};

export default OTPInputs;
