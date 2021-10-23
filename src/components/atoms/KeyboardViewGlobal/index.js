import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {hp} from '../../../constants';

const KeyboardViewGlobal = props => {
  return (
    <KeyboardAvoidingView
      style={props.style}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={hp(6)}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardViewGlobal;
