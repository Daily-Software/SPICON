import React, { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";

const PlayMascotsSmallLeagueIndex = ({ navigation }) => (
  <Background>
    <BackButton goBack={() => navigation.navigate("Dashboard")} />

    <Header>PlayMascotsSmallLeagueIndex</Header>
  </Background>
);

export default memo(PlayMascotsSmallLeagueIndex);