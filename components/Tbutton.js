import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity } from 'react-native';

import COLORS from "../constants/Colors";

function Tbutton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={{...styles.button, ...props.style}}>
            <Text style={styles.buttonFont}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {width: 200, height: 50, padding: 10, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.primary, margin: 15, borderRadius: 15},
  buttonFont : {fontSize: 20, textAlign: "center", textAlignVertical: "center"}
});

export default Tbutton;