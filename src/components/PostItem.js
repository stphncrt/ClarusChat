import React from 'react';
import moment from 'moment';
import {View, Text} from 'react-native';
import {postItem} from './styles';

const PostItem = props => {
  return (
    <View style={postItem.container}>
      <View style={postItem.headerContainer}>
        <Text style={postItem.username}>
          {props.post.userEmail.split('@')[0]}
        </Text>
        <Text style={postItem.time}>
          {moment
            .duration(
              moment(props.post.time).diff(moment(new Date()), 'seconds'),
              'seconds',
            )
            .humanize(true)}
        </Text>
      </View>
      <View style={postItem.bodyContainer}>
        <Text>{props.post.postText}</Text>
      </View>
    </View>
  );
};

export {PostItem};
