import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  PlayMascotsProfessionalIndex,
    PlayMascotsProfessionalEasy,
    PlayMascotsProfessionalMedium,
    PlayMascotsProfessionalHard,
  PlayLogosProfessionalIndex,
    PlayLogosProfessionalEasy,
    PlayLogosProfessionalMedium,
    PlayLogosProfessionalHard,
  PlayKaleidoscopeProfessionalIndex,
    PlayKaleidoscopeMLB,
    PlayKaleidoscopeNBA,
    PlayKaleidoscopeNFL,
    PlayKaleidoscopeNHL,    
  PlayMascotsCollegeIndex,
    PlayMascotsCollegeEasy,
    PlayMascotsCollegeMedium,
    PlayMascotsCollegeHard,
  PlayLogosCollegeIndex,
    PlayLogosCollegeEasy,
    PlayLogosCollegeMedium,
    PlayLogosCollegeHard,
  PlayKaleidoscopeCollegeIndex,
    PlayKaleidoscopeCollegeEasy,
    PlayKaleidoscopeCollegeHard,
  PlayMascotsSmallLeagueIndex,
  PlayLogosSmallLeagueIndex
} from "./screens";

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    AuthLoadingScreen,
    ForgotPasswordScreen,
    AuthLoadingScreen,
    Dashboard,
    PlayMascotsProfessionalIndex,
      PlayMascotsProfessionalEasy,
      PlayMascotsProfessionalMedium,
      PlayMascotsProfessionalHard,
    PlayLogosProfessionalIndex,
      PlayLogosProfessionalEasy,
      PlayLogosProfessionalMedium,
      PlayLogosProfessionalHard,
    PlayKaleidoscopeProfessionalIndex,
      PlayKaleidoscopeMLB,
      PlayKaleidoscopeNBA,
      PlayKaleidoscopeNFL,
      PlayKaleidoscopeNHL, 
    PlayMascotsCollegeIndex,
      PlayMascotsCollegeEasy,
      PlayMascotsCollegeMedium,
      PlayMascotsCollegeHard,
    PlayLogosCollegeIndex,
      PlayLogosCollegeEasy,
      PlayLogosCollegeMedium,
      PlayLogosCollegeHard,
    PlayKaleidoscopeCollegeIndex,
      PlayKaleidoscopeCollegeEasy,
      PlayKaleidoscopeCollegeHard,
    PlayMascotsSmallLeagueIndex,
    PlayLogosSmallLeagueIndex
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);