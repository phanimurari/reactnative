import React from 'react';
import {Gradient} from 'react-gradient';
import {View} from 'react-native';

const gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668'],
];

class GradientComponent extends React.Component {
  render() {
    return (
      <View>
        <Gradient
          gradients={gradients} // required
          property="background"
          duration={3000}
          angle="45deg"
        />
      </View>
    );
  }
}

export default GradientComponent;
