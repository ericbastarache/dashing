import React from 'react';
import {
  Form,
  Field
} from 'redux-form';
import reduxForm from 'redux-form/lib/reduxForm';
import TextInput from 'components/TextInput';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Field
            name='login'
            component={TextInput}
          />
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login);