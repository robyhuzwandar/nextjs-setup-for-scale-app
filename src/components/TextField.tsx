import * as React from 'react';

type TextFieldProps = {
  type: React.HTMLInputTypeAttribute;
};

const TextField = ({ type }: TextFieldProps) => {
  return <input type={type} />;
};

export default TextField;
