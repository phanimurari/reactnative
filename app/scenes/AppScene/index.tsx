/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Slider,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {observer} from 'mobx-react';
import {observable} from 'mobx';

import Counter from '../../components/Counter';

import EnvironmentConstants from '../../constants/EnvironmentConstants';
import {goToLaunchScene} from '../../utils/NavigationUtils';
import Images from '../../images';
import I18n from '../../i18n/i18n';
import InputBar from '../../components/Counter/common/inputBar';
import RadioButtons from '../../components/Counter/common/radioButtons';
import SelectButton from '../../components/Counter/common/select';
import Checkbox from '../../components/Counter/common/checkbox/input';
import ButtonComponent from '../../components/Counter/common/button';
import MyDatePicker from '../../components/Counter/common/datePicker';
import SliderExample from '../../components/Counter/common/slider';

var global: any;

@observer
class AppScene extends React.Component {
  @observable firstName: string | null = null;
  @observable lastName: string | null = null;
  @observable email: string | null = null;
  @observable mobileNumber: number | null = null;
  @observable password: string | null = null;

  goToLaunchScreen = () => {
    goToLaunchScene();
  };

  render() {
    return (
      <LinearGradient
        colors={['#0f93f2', '#0bc5de']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Fragment>
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              <View style={styles.displayCenter}>
                <Image source={Images.ibHubsLogo} />

                <Text style={styles.signUpTextStyle}>{'Sign up Form'}</Text>

                <Text>{'Please Fill The Form To Sign Up'}</Text>

                <View style={styles.displayFlex}>
                  <InputBar
                    placeholderText={'First name'}
                    passwordBool={false}
                    type={'name-phone-pad'}
                    lines={1}
                  />
                  <InputBar
                    placeholderText={'Last name'}
                    passwordBool={false}
                    type={'name-phone-pad'}
                    lines={1}
                  />
                  <InputBar
                    placeholderText={'email'}
                    passwordBool={false}
                    type={'email-address'}
                    lines={1}
                  />
                  <InputBar
                    placeholderText={'Mobile Number'}
                    passwordBool={false}
                    type={'numeric'}
                    lines={1}
                  />
                  <InputBar
                    placeholderText={'password'}
                    passwordBool={true}
                    type={'default'}
                    lines={1}
                  />
                  <InputBar
                    placeholderText={'confirm password'}
                    passwordBool={true}
                    type={'default'}
                    lines={1}
                  />
                </View>

                <View style={styles.block}>
                  <Text>{'Select Your Gender'}</Text>
                  <RadioButtons />
                </View>
                <SelectButton />

                <MyDatePicker />

                <View style={styles.addressBox}>
                  <Text style={styles.addressText}>{'Enter your address'}</Text>
                  <InputBar
                    placeholderText={'Please enter your address'}
                    passwordBool={true}
                    type={'name-phone-pad'}
                    lines={5}
                  />
                </View>

                <SliderExample />
                <Checkbox />
                <ButtonComponent />
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  scrollView: {},

  signUpTextStyle: {
    fontSize: 20,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  displayCenter: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },

  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
  },

  displayFlex: {
    width: 300,
    padding: 15,
  },

  block: {
    justifyContent: 'space-between',
    height: 70,
  },

  addressBox: {
    margin: 10,
  },

  addressText: {
    margin: 10,
  },
});

export default AppScene;
