import React, {Component} from 'react';

import {TextInput, StyleSheet} from 'react-native';

interface InputBarPropsType {
  placeholderText: string;
  passwordBool: boolean;
  type: string;
  lines: number;
  onChange: Function;
}

class InputBar extends Component<InputBarPropsType> {
  render() {
    const {placeholderText, passwordBool, type, lines} = this.props;

    return (
      <TextInput
        style={styles.inputBarStyle}
        placeholder={placeholderText}
        secureTextEntry={passwordBool}
        keyboardType={type}
        multiline={true}
        numberOfLines={lines}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputBarStyle: {
    backgroundColor: '#e9edf5',
    margin: 10,
  },
});

export default InputBar;
