import React, {Component} from 'react';
import {Button, Alert} from 'react-native';

class ButtonComponent extends Component {
  onClickSignUp = () => {
    Alert.alert('signed In');
  };

  render() {
    return (
      <Button title="Sign Up" color="#2272f2" onPress={this.onClickSignUp} />
    );
  }
}

export default ButtonComponent;
