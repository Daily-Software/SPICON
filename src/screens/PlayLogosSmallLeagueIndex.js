import React, { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";

const PlayLogosSmallLeagueIndex = ({ navigation }) => (
  <Background>
    <BackButton goBack={() => navigation.navigate("Dashboard")} />

    <Header>PlayLogosSmallLeagueIndex</Header>
  </Background>
);

export default memo(PlayLogosSmallLeagueIndex);