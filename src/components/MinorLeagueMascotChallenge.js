import React, { memo } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/610; //610 is actual image width

const MinorLeagueMascotChallenge = () => (
  <Image source={require("../assets/minor-league-mascot-challenege.png")} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: win.width,
    height: 185 * ratio //185 is actual height of image
  },
});

export default memo(MinorLeagueMascotChallenge);
