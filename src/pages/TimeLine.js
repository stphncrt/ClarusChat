import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const TimeLine = () => {
  const user = auth().currentUser;
  const [modalFlag, setModalFlag] = useState(false);
  return (
    <View style={timelinePage.container}>
      <Header onTopicModalSelect={() => setModalFlag(true)} />

      <PostInput onSendingPost={value => console.log(value)} />

      <TopicSelectModal
        visibility={modalFlag}
        onClose={() => setModalFlag(false)}
      />
    </View>
  );
};

export {TimeLine};
