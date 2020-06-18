import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingBottom: 20,
	width: '70%',
    marginLeft:'15%',
    marginRight:'15%',
    textAlign:'center'
  }
});

export default memo(Header);
