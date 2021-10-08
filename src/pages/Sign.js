import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Input, Button} from '../components';
import {authStyle} from './styles';

const Sign = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  async function HandleCreateAccount() {
    if (password === passwordConfirm) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        props.navigation.goBack();
      } catch (error) {
        Alert.alert('Clarusway', 'An error occurred');
      }
    }
  }

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
      <ScrollView style={{flex: 1}}>
        <View style={authStyle.container}>
          <Image
            style={authStyle.logo}
            source={require('../assets/Logo.png')}
          />
          <Text style={authStyle.logoText}>CLARUSCHAT</Text>
        </View>
        <View style={{flex: 1}}>
          <Input
            inputProps={{
              placeholder: 'Type your Email..',
              keyboardType: 'email-address',
            }}
            onType={value => setEmail(value)}
          />
          <Input
            inputProps={{
              placeholder: 'Enter your password',
              secureTextEntry: true,
            }}
            onType={value => setPassword(value)}
          />
          <Input
            inputProps={{
              placeholder: 'Enter your password again',
              secureTextEntry: true,
            }}
            onType={value => setPasswordConfirm(value)}
          />
        </View>
        <Button title="Create Account" onPress={HandleCreateAccount} />
        <Button title="Cancel" onPress={props.navigation.goBack} noBorder />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export {Sign};
