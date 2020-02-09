import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import COLORS from "../constants/Colors";
import ColorButton from "../components/ColorButton";
import generateRandomColor from "./RandomColorGenerator"
import { AuthSession } from 'expo';

function EndGameScreen({ route, navigation }) {
    const { selected, answer } = route.params;

    function playAgainHandler() {
        navigation.popToTop();
    }

    function getAnswerText() {
        if (selected === answer) {
            return (<View style={styles.resultBox}>
                <Text style={styles.resultText}>Correct!</Text>
            </View>);
        } else {
            return (<View style={{ ...styles.resultBox, backgroundColor: "#bb0000" }}>
                <Text style={styles.resultText}>Incorrect!</Text>
            </View>);
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.infoContainer}>
                <View style={styles.buttonContainer}>
                    { getAnswerText() }
                </View>
                <View style={styles.selectionContainer}>
                    <View style={styles.answerContainer}>
                        <Text style={styles.descriptiorText}>You picked:</Text>
                        <ColorButton style={{ backgroundColor: selected }} />
                    </View>
                    <View style={styles.answerContainer}>
                        <Text style={styles.descriptiorText}>Answer:</Text>
                        <ColorButton style={{ backgroundColor: answer }} />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={playAgainHandler}>
                        <View style={styles.playAgainButton}>
                            <Text style={styles.playAgainText}>Play Again?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: COLORS.secondary, justifyContent: "center", alignItems: "center" },
    infoContainer: { alignItems: "center", justifyContent: "space-around", height: "100%", paddingBottom: "10%" },
    resultBox: { width: 150, height: 75, backgroundColor: "green", alignItems: "center", justifyContent: "center", borderRadius: 20 },
    resultText: { fontSize: 20, color: COLORS.secondary },
    selectionContainer: { flexDirection: "row", justifyContent: "space-evenly", alignContent: "center", width: "100%"},
    answerContainer: {},
    descriptiorText: { color: "#fff", fontSize: 12, textAlign: "center" },
    playAgainButton: { width: 150, height: 75, backgroundColor: COLORS.primary, alignItems: "center", justifyContent: "center", borderRadius: 20 },
    playAgainText: { fontSize: 20, color: COLORS.secondary }
});

export default EndGameScreen;