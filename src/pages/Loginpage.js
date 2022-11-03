import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Logincontent from "../components/Logincontent";
import Header2 from "../components/Header2";

const Login = () => {
    return(
      
      <View style={styles.container}>
      <Header2 title="登入"/>
      
      <Logincontent />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Login;