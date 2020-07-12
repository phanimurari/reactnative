import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {View, Text, StyleSheet} from 'react-native';

@observer
export default class MyDatePicker extends Component {
  @observable date: any = new Date();

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{'DOB'}</Text>
        <DatePicker
          style={{width: 200}}
          date={this.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1997-10-01"
          maxDate="2020-10-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date: any) => (this.date = date)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },

  textStyle: {
    fontSize: 10,
  },
});
