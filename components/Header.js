import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import COLORS from "../constants/Colors";

function Header(props) {
  return (
    <View style={{...styles.header, ...props.style}}>
        <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {width: "100%", height: 80, paddingTop: 36, backgroundColor: COLORS.accent, alignContent: "center", justifyContent: "center"},
  headerText: {fontSize: 18, color: COLORS.secondary, textAlign: "center", textAlignVertical: "bottom"}
});

export default Header;