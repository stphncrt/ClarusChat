import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {topicModal} from './styles';

const topics = ['FullStack', 'DataScience', 'Gaming', 'Mobile', 'Random'];

const TopicSelectModal = props => {
  return (
    <Modal
      isVisible={props.visibility}
      style={topicModal.modal}
      onBackdropPress={props.onClose}>
      <View style={topicModal.container}>
        {topics.map((topic, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={topicModal.topicItemContainer}
              onPress={() => props.onTopicSelect(topic)}>
              <Text style={topicModal.topicItemText}> #{topic} </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

export {TopicSelectModal};
