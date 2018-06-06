import React from 'react';
import {
  Input,
  InputLabel,
  FormControl
} from '@material-ui/core';

const TextInput = props => {
  const {
    label,
    meta: {
      error,
      warning,
    },
    
  } = props;
  return (
    <FormControl>
      <InputLabel>

      </InputLabel>
    </FormControl>
  );
}

export default TextInput;