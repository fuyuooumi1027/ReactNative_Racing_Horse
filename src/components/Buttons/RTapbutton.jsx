import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import colors from '../../containers/colors';
import TriangleCorner  from 'react-native-triangle';

const RTapButton = ({ id, isActive, onPress, label}) => {
    // const [height, setHeight] = useState(30);
    const handlePress = () => {
        onPress(id);
    };

  return (
    <TouchableOpacity style={[ 
        styles.button, 
        id ==1 ? styles.buttonT : styles.button, 
        id ==2 ? styles.buttonM : styles.button,  
        id ==3 ? styles.buttonE : styles.button,  
        isActive ? styles.activeButton : null,]}
        onPress={handlePress}
    >
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RTapButton;



const styles = StyleSheet.create({
    button: {
      borderTopRightRadius: 50,
      width: vw(34),
      height: vh(6),
      borderWidth: 1,
      paddingVertical: 12,
      alignItems: 'center',
      // transform: [{ scaleY: 1 }],
    },
    activeButton: {
      marginTop: -22,
      height: vh(9),
      paddingVertical: 20,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 600
      // paddingVertical: 5,
      // transform: [{ scaleY: 1 }],
    },
    buttonT: {
        backgroundColor: colors.tabButtonFirst,
    },
    buttonM: {
        backgroundColor: colors.tabButtonMiddle
    },
    buttonE: {
        backgroundColor: colors.tabButtonEnd
    },
  
  });