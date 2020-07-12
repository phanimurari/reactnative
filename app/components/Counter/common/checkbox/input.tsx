import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
import {View, Text, CheckBox, StyleSheet} from 'react-native';

@observer
class Checkbox extends Component {
  @observable isChecked: boolean = false;

  @action.bound onClicked() {
    this.isChecked = !this.isChecked;
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox value={this.isChecked} onValueChange={this.onClicked} />
        <Text>{'I accept the terms and the conditions'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Checkbox;
