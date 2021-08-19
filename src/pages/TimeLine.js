import React, {useState} from 'react';
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

        <PostInput onSendingPost={sendingPost} />

        <TopicSelectModal
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
