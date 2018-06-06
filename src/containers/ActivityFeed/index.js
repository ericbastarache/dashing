import React from 'react';
import ButtonInput from 'components/ButtonInput';

class ActivityFeed extends React.Component {
  render() {
    return (
      <ButtonInput
        onClick={this.showAlert}
      >
        Show Alert
      </ButtonInput>
    )
  }
}

export default ActivityFeed;