/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import CardStyle from '../../Styles/CardStyle';

const Card = ({card}) => (
  <View style={CardStyle.card} activeOpacity={1}>
    <Image
      source={card.photo}
      resizeMode="cover"
      style={{width: 300, height: 400}}
    />
  </View>
);

Card.propTypes = {
  card: PropTypes.shape({
    photo: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  }).isRequired,
};

export default Card;
