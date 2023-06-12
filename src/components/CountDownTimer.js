import React, { useState, useEffect } from 'react';
import { Text,StyleSheet } from 'react-native';
import colors from '../containers/colors';

const CountDownTimer = ({secondsRemaining}) => {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const displayValue = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <Text style={styles.currentHourStyle}>{displayValue}</Text>
  );
};

export default CountDownTimer;

const styles = StyleSheet.create({
  currentHourStyle:{
    fontSize: 36,
    color: colors.white,
    fontWeight: 700,
  }
})