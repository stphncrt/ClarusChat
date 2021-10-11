import React, {useState} from 'react';
<<<<<<< HEAD
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
=======
import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';
import database from '@react-native-firebase/database';
import moment from 'moment';

const user = auth().currentUser;

const TimeLine = props => {
  const [postList, setPostList] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const selectingTopic = value => {
    database().ref(`/${selectedTopic}`).off('value');
    setSelectedTopic(value);
    setModalFlag(false);

    database()
      .ref(`${value}`)
      .on('value', snapshot => {
        const data = snapshot.val();
        // turing list data in to the array of object
        const formattedData = Object.keys(data).map(key => ({...data[key]}));
        formattedData.sort((a, b) => {
          return new Date(b.time) - new Date(a.time);
        });

        console.log(formattedData);
        setPostList(formattedData);
      });
  };
  const sendingPost = value => {
    const postObject = {
      userEmail: user.email,
      postText: value,
      time: moment().toISOString(),
    };

    database().ref(`${selectedTopic}/`).push(postObject);
  };

  // const renderPost = ({item}) => <PostItem post={item} />;
  const logingOut = async () => {
    await auth().signOut(user);
    // props.navigation.navigate('Sign');
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={timelinePage.container}>
        <Header
          title={selectedTopic}
          onTopicModalSelect={() => setModalFlag(true)}
          onLogOut={logingOut}
        />
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={postList}
          renderItem={({item}) => <PostItem post={item} />}
        />
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78

        <PostInput onSendingPost={sendingPost} />

        <TopicSelectModal
<<<<<<< HEAD
          visibility={topicModalFlag}
          onClose={() => setTopicModalFlag(false)}
          onTopicSelect={selectingTopic}
        />
      </View>
    </View>
  );
};

export {Timeline};
=======
          visibility={modalFlag}
          onClose={
            selectedTopic !== ''
              ? () => setModalFlag(false)
              : () => setModalFlag(true)
          }
          onTopicSelect={selectingTopic}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export {TimeLine};
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78
