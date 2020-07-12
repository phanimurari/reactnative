import React, {Component} from 'react';
import RadioForm from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
  {label: 'Others', value: 1},
];

class RadioButtons extends Component {
  render() {
    return (
      <RadioForm
        radio_props={radio_props}
        initial={-1}
        formHorizontal={true}
        onPress={(value: any) => {
          this.setState({value: value});
        }}
      />
    );
  }
}

export default RadioButtons;
