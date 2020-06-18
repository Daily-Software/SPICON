import React, { memo } from "react";
import Background from "../components/Background";
import LogoSmall from "../components/LogoSmall";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const HomeScreen = ({ navigation }) => (
  <Background>
    <Paragraph>
     Mascot & Logo Sports Trivia
    </Paragraph>

    <LogoSmall />
    {/*<Header>Login</Header>*/}


    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
