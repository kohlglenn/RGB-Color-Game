import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import COLORS from "../constants/Colors";

function Template(props) {
  return (
    <View style={{...styles.screen, ...props.style}}>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1}
});

export default Template;