import React from 'react';
import {TouchableOpacity} from 'react-native';
import {func, string} from 'prop-types';
import Icon from 'react-native-vector-icons';
import IconButtonStyle from '../Styles/IconButtonStyle';

const IconButton = ({onPress, name, backgroundColor, color}) => (
  <TouchableOpacity
    style={[IconButtonStyle.singleButton, {backgroundColor}]}
    onPress={onPress}
    activeOpacity={0.85}>
    <Icon name={name} size={20} color={color} />
  </TouchableOpacity>
);

IconButton.propTypes = {
  onPress: func.isRequired,
  name: string.isRequired,
  color: string,
  backgroundColor: string,
};

IconButton.defaultProps = {
  color: 'white',
  backgroundColor: 'pink',
};

export default IconButton;
