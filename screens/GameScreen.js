import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import COLORS from "../constants/Colors";
import ColorButton from "../components/ColorButton";
import generateRandomColor from "./RandomColorGenerator"

function GameScreen({route, navigation }) {
    const { color } = route.params;
    const { mode } = {mode: "easy"};
    const numRows = mode === "easy" ? 2 : 4;
    const numButtons = numRows*2;
    const answer = Math.floor(Math.random()*numButtons);
    let colors_array = Array(numButtons).fill(1).map((val, i) => {return (i === answer) ? color : generateRandomColor()});
    let button_array = [];
    for (i=0; i<numButtons; i+=2) button_array.push({c1: colors_array[i], c2: colors_array[i+1]});
    let view_array = button_array.map((v, i) => {
        return (<View key={i} style={styles.selectorContainer}>
            <ColorButton style={{...styles.colorButton, backgroundColor: v.c1}} onPress={colorButtonInputHandler.bind(this, v.c1)}/>
            <ColorButton style={{...styles.colorButton, backgroundColor: v.c2}} onPress={colorButtonInputHandler.bind(this, v.c2)}/>
        </View>);
    });

    function colorButtonInputHandler(selectedColor) {
        navigation.navigate("End", {selected: selectedColor, answer: color});
    }

  return (
    <View style={styles.screen}>
        <View style={styles.colorContainer}>
            <Text style={styles.colorText}>{color}</Text>
        </View>
        { view_array }
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {flex: 1, backgroundColor: COLORS.secondary, justifyContent: "flex-start", alignItems: "center"},
    colorContainer: {},
    colorText: {color: COLORS.primary, fontSize: 38},
    selectorContainer: {margin: "10%", flexDirection: "row"},
    colorButton: {margin: 10}
});

export default GameScreen;