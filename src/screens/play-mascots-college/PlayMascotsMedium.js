import React, { memo } from "react";
import BackgroundWhite from "../../components/BackgroundWhite";
import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";
import { View, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PlayMascotsMedium = ({ navigation }) => (

  <BackgroundWhite>

      <View style={styles.containerBack}>
        <BackButton goBack={() => navigation.navigate("PlayMascotsCollegeIndex")} />
      </View>

      <WebView style={styles.webViewContainer}
        originWhitelist={['*']}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator ={false}
        scalesPageToFit={false}    
        source={{ uri: 'https://mascots-college-medium.firebaseapp.com/' }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator/>
        )}        
      />
  
  </BackgroundWhite>
)

export default memo(PlayMascotsMedium);

const styles = StyleSheet.create({
  containerBack: { 
    flex: 1,
    width: wp('100%'),
    flexDirection: "column",
    position: 'absolute',
    top:0,
    zIndex: 10,
    backgroundColor:'#fff'
  },
  flexContainer: {
    marginTop:hp('5%)'),
    height: hp('95%)'),
    width: wp('100%'),
  },
  webViewContainer: {
    flex:1,
    width: wp('100%'),
    marginTop:70,
    zIndex: 5,
    position:'relative',
  }  
})