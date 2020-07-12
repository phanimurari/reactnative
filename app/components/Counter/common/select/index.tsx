import React from 'react';
import {View, Picker, StyleSheet, Text} from 'react-native';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';

@observer
class SelectButton extends React.Component {
  @observable selectedValue: string = 'CSE';

  @action.bound setSelectedValue(value: string) {
    this.selectedValue = value;
  }

  render() {
    const {selectedValue, setSelectedValue} = this;

    return (
      <View style={styles.container}>
        <Text>{'Select Your Branch'}</Text>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 100}}
          onValueChange={itemValue => setSelectedValue(itemValue)}>
          <Picker.Item label="CSE" value="CSE" />
          <Picker.Item label="EEE" value="EEE" />
          <Picker.Item label="ECE" value="ECE" />
          <Picker.Item label="IT" value="IT" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
});

export default SelectButton;
