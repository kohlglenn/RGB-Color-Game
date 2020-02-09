import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import COLORS from "../constants/Colors";
import Tbutton from "../components/Tbutton";
import generateRandomColor from "./RandomColorGenerator"


function StartGameScreen({ navigation }) {
    const [color, setColor] = useState(generateRandomColor());

    function startHandler() {
        setColor(generateRandomColor());
        navigation.navigate("Game", {color: color});
    }

  return (
    <View style={styles.screen}>
        <View style={styles.infoContainer}>
            <Tbutton title="Start" onPress={startHandler}/>
            <View style={{...styles.button, backgroundColor: COLORS.secondary}}>
                <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://github.com/kohlglenn')}>About</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: COLORS.secondary, justifyContent: "center", alignContent: "center"},
  infoContainer: {alignItems: "center"},
  button: {width: 200, height: 50, padding: 10, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.primary, margin: 15, borderRadius: 15},
  buttonFont : {fontSize: 20, textAlign: "center", textAlignVertical: "center"},
  hyperlink: {color: "#fff", fontSize: 18, textDecorationLine: "underline"}
});

export default StartGameScreen;
