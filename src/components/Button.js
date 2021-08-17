import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {button, button_outline} from './styles';

const Button = props => {
  const style = props.noBorder ? button_outline : button;
  return (
    <TouchableOpacity style={style.container} onPress={props.onPress}>
      <Text style={style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export {Button};
