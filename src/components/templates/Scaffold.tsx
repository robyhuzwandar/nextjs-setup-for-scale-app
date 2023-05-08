import React from 'react';
import BackButton from '../BackButton';
import Navbar from '../Navbar';

type ScaffoldProps = {
  children: React.ReactNode;
  onClickBack?: () => void;
  step: number;
};

export const Scaffold = ({ children, onClickBack, step }: ScaffoldProps) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: 40,
        margin: 40,
      }}
    >
      <Navbar currentStep={step} />
      <BackButton label="Back to delivery" onClick={onClickBack} />
      {children}
    </div>
  );
};
