import React from 'react';

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const Input: React.FC<InputProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return <input onChange={handleChange} />;
};
export default Input;
