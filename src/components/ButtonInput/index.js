import React from 'react';
import {
  Button
} from '@material-ui/core';

const ButtonInput = ({children, ...rest}) => {
  return (
    <Button
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ButtonInput;