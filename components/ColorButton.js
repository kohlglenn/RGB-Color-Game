import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import COLORS from "../constants/Colors";

function ColorButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={{...styles.button, ...props.style}}>
            
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {width: 150, height: 150, elevation: 8, backgroundColor: "white", borderRadius: 20}
});

export default ColorButton;