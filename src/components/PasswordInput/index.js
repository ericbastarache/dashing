import React from 'react';
import TextInput from 'components/TextInput';

const PasswordInput = (props) => {
  const {
    type
  } = props;
  return (
    <TextInput
      type={type}
    />
  );
}

export default PasswordInput;