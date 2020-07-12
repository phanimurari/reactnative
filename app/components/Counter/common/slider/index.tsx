import React from 'react';
import Slider from 'react-native-slider';
var {AppRegistry, StyleSheet, View, Text} = require('react-native');
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class SliderExample extends React.Component {
  @observable value: number = 0.2;

  render() {
    return (
      <View style={styles.container}>
        <Text>Your Typing Speed: {Math.floor(this.value)}</Text>

        <Slider
          value={this.value}
          minimumValue={0}
          maximumValue={10}
          onValueChange={(value: number) => (this.value = value)}
          minimumTrackTintColor={'#2272f2'}
          maximumTrackTintColor={'#e9edf5'}
          thumbTintColor={'#2272f2'}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 200,
  },
});

export default SliderExample;

// AppRegistry.registerComponent('SliderExample', () => SliderExample);
