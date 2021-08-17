import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Input, Button} from '../components';
import {authStyle} from './styles';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function login() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => alert('ok'))
      .catch(() => alert('err'));
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
        </View>
        <Button title="Sign In" onPress={() => login()} />
        <Button
          title="Sign Up"
          onPress={() => props.navigation.navigate('Sign')}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export {Login};
