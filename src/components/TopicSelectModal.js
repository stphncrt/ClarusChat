import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
<<<<<<< HEAD

import {topicModal} from './styles';

const topics = ['fullstack', 'data-science', 'gaming', 'mobile', 'random'];
=======
import {topicModal} from './styles';

const topics = ['FullStack', 'DataScience', 'Gaming', 'Mobile', 'Random'];
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78

const TopicSelectModal = props => {
  return (
    <Modal
      isVisible={props.visibility}
      style={topicModal.modal}
      onBackdropPress={props.onClose}>
      <View style={topicModal.container}>
<<<<<<< HEAD
        {topics.map((topic, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={topicModal.topicItemContainer}
              onPress={() => props.onTopicSelect(topic)}>
              <Text style={topicModal.topicItemText}>#{topic}</Text>
=======
        {topics.map((topic, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={topicModal.topicItemContainer}
              onPress={() => props.onTopicSelect(topic)}>
              <Text style={topicModal.topicItemText}> #{topic} </Text>
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

export {TopicSelectModal};
