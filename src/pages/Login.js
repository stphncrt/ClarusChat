import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Input, Button} from '../components';
import {authStyle} from './styles';
import {resolveAuthError} from '../functions';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function login() {
<<<<<<< HEAD
    try {
      await auth().signInWithEmailAndPassword(email, password);
      props.navigation.navigate('Timeline');
      Alert.alert('ok');
    } catch (error) {
      Alert.alert('Claruschat', resolveAuthError(error.code));
=======
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => alert('ok'))
    //   .catch(err => Alert.alert('CLARUSCHAT', resolveAuthError(err.code)));

    try {
      if (email === '' || password === '') {
        Alert.alert('CLARUSCHAT', resolveAuthError('auth/null-value'));
      } else {
        await auth().signInWithEmailAndPassword(email, password);
        props.navigation.navigate('TimeLine');
      }
    } catch (error) {
      Alert.alert('CLARUSCHAT', resolveAuthError(error.code));
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78
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
