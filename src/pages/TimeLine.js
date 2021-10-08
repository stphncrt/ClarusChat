import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import moment from 'moment';

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const user = auth().currentUser;
const Timeline = () => {
  // console.log(user);

  const [topicModalFlag, setTopicModalFlag] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const selectingTopic = value => {
    setSelectedTopic(value);
    setTopicModalFlag(false);

    //     .on('value', snapshot => {
    //       console.log('update');
    //       console.log(snapshot.val());
    //     });
  };
  const sendingPost = value => {
    const postObject = {
      userMail: user.email,
      postText: value,
      time: moment().toISOString(),
    };
    database().ref(`${selectedTopic}/`).push(postObject);
  };
  return (
    <View style={timelinePage.container}>
      <View style={timelinePage.container}>
        <Header
          title={selectedTopic}
          onTopicModalSelect={() => setTopicModalFlag(true)}
        />

        <FlatList data={[]} renderItem={() => null} />

        <PostInput onSendingPost={sendingPost} />

        <TopicSelectModal
          visibility={topicModalFlag}
          onClose={() => setTopicModalFlag(false)}
          onTopicSelect={selectingTopic}
        />
      </View>
    </View>
  );
};

export {Timeline};
