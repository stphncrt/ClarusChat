import React from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const TimeLine = () => {
  const user = auth().currentUser;
  console.log(user);
  return (
    <View style={timelinePage.container}>
      <Header />
    </View>
  );
};

export {TimeLine};
