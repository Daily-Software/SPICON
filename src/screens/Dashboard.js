import React, { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import Background from "../components/BackgroundNoPadding";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import ButtonSmall from "../components/ButtonSmall";
import ProTeamMascotChallenge from "../components/ProTeamMascotChallenge";
import ProTeamLogoMatchup from "../components/ProTeamLogoMatchup";
import KaleidoscopeProfessional from "../components/KaleidoscopeProfessional";
import CollegeMascotChallenge from "../components/CollegeMascotChallenge";
import CollegeTeamLogoMatchup from "../components/CollegeTeamLogoMatchup";
import KaleidoscopeCollege from "../components/KaleidoscopeCollege";
import MinorLeagueMascotChallenge from "../components/MinorLeagueMascotChallenge";
import MinorLeagueTeamLogoMatchup from "../components/MinorLeagueTeamLogoMatchup";

import { logoutUser } from "../api/auth-api";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { theme } from "../core/theme";

import firebase from "firebase/app";
import "firebase/auth";



const Dashboard = ({ navigation }) => (


  <Background>
    
    <View style={styles.header}>
      <Header>Welcome{firebase.auth().currentUser.displayName ? ', ' + firebase.auth().currentUser.displayName : ' '}</Header>
      <Paragraph>
        Pick a Game!
      </Paragraph>
    </View>

    <ScrollView contentContainerStyle={styles.imgTilesContainer}>
      
      <TouchableOpacity onPress={() => navigation.navigate("PlayMascotsProfessionalIndex")}>
        <ProTeamMascotChallenge />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PlayLogosProfessionalIndex")}>
        <ProTeamLogoMatchup />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PlayKaleidoscopeProfessionalIndex")}>
        <KaleidoscopeProfessional />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PlayMascotsCollegeIndex")}>
        <CollegeMascotChallenge />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PlayLogosCollegeIndex")}>
        <CollegeTeamLogoMatchup />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PlayKaleidoscopeCollegeIndex")}>
        <KaleidoscopeCollege />
      </TouchableOpacity>

      {/*onPress={() => navigation.navigate("PlayMascotsSmallLeagueIndex")}*/}
      <TouchableOpacity>
        <MinorLeagueMascotChallenge />
      </TouchableOpacity>
  
      {/*onPress={() => navigation.navigate("PlayLogosSmallLeagueIndex")}*/}
      <TouchableOpacity> 
        <MinorLeagueTeamLogoMatchup />
      </TouchableOpacity>

    </ScrollView>

    <View style={styles.footer}>
      <ButtonSmall mode="outlined" onPress={() => logoutUser()}>
        Log Out
      </ButtonSmall>
    </View>
   
  </Background>
);

export default memo(Dashboard);

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
  },
  footer: {
    marginTop: 14,
    marginBottom: 20
  },
  imgTilesContainer: {
    //flex: 1,
    width: wp('100%'),
    maxWidth: wp('100%'),
    minWidth: wp('100%'),
  }
});