import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Overlay = ({label, color}) => (
  <View style={[styles.overlay, {borderColor: color}]}>
    <Text style={[styles.overlayText, {color}]}>{label}</Text>
  </View>
);

Overlay.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 12,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  overlayText: {
    fontSize: 42,
    fontWeight: 'bold',
  },
});

export default Overlay;
