import React, { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import Background from "../components/BackgroundNoPadding";
import Logo from "../components/Logo";
import Header2 from "../components/Header2";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PlayKaleidoscopeProfessionalIndex = ({ navigation }) => (

  <Background>
    
      <BackButton goBack={() => navigation.navigate("Dashboard")} />

      <Image source={require("../assets/pro-kaleidoscope.png")} style={styles.logoImg} />
      <Header2>
        Pro Kaleidoscope Matchup
      </Header2>
      
      <TouchableOpacity onPress={() => navigation.navigate("PlayKaleidoscopeMLB")}>
      <ImageBackground
          source={require("../assets/spacer.png")}
          resizeMode="cover"
          style={[styles.tile, styles.medium]}
        >
          <Text style={styles.tiles}>MLB</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PlayKaleidoscopeNBA")}>
      <ImageBackground
          source={require("../assets/spacer.png")}
          resizeMode="cover"
          style={[styles.tile, styles.medium]}
        >
          <Text style={styles.tiles}>NBA</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PlayKaleidoscopeNFL")}>
      <ImageBackground
          source={require("../assets/spacer.png")}
          resizeMode="cover"
          style={[styles.tile, styles.medium]}
        >
          <Text style={styles.tiles}>NFL</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PlayKaleidoscopeNHL")}>
      <ImageBackground
          source={require("../assets/spacer.png")}
          resizeMode="cover"
          style={[styles.tile, styles.medium]}
        >
          <Text style={styles.tiles}>NHL</Text>
        </ImageBackground>
      </TouchableOpacity>
   
  </Background>
);

export default memo(PlayKaleidoscopeProfessionalIndex);

const styles = StyleSheet.create({
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  },
  logoImg: {
    width: 215,
    height:215, 
    justifyContent: 'center',
    marginBottom:20
  },
  tile: {
    width: wp('70%'),
    marginLeft:'15%',
    marginRight:'15%',
    marginTop:5,
    marginBottom:5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    alignContent: "stretch",
    alignSelf: 'stretch', 
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  tiles: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding:12,
    color:"#fff"
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#b35900',
    marginBottom:30
  },
  easy: {
    backgroundColor: theme.colors.easy
  },
  medium: {
    backgroundColor: theme.colors.medium
  },
  hard: {
    backgroundColor: theme.colors.hard
  }
});
