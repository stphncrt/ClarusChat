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
<<<<<<< HEAD
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  async function HandleCreateAccount() {
    if (password === passwordConfirm) {
=======
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  async function signIn() {
    if (password === passwordRepeat) {
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        props.navigation.goBack();
      } catch (error) {
<<<<<<< HEAD
        Alert.alert('Clarusway', 'An error occurred');
      }
    }
  }

=======
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('CLARUSCHAT', 'User existing. Try another one..');
        } else {
          Alert.alert('CLARUSCHAT', 'An error occurred');
          console.log(error.code);
        }
      }
    } else {
      Alert.alert('CLARUSCHAT', 'Passwords are not matched');
    }
  }
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78
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
<<<<<<< HEAD
            onType={value => setPasswordConfirm(value)}
          />
        </View>
        <Button title="Create Account" onPress={HandleCreateAccount} />
=======
            onType={value => setPasswordRepeat(value)}
          />
        </View>
        <Button title="Create Account" onPress={signIn} />
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78
        <Button title="Cancel" onPress={props.navigation.goBack} noBorder />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export {Sign};
