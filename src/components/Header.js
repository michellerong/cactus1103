import React from "react";
import { StyleSheet, Text, ImageBackground, Image, View, TouchableOpacity  } from "react-native";
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Header = () => {
  return (
    <View style={styles.headerStyle}>
    <ImageBackground  style={styles.center} source={require('../image/frontheader.png')} >
      
    </ImageBackground>
    <View style={styles.headerStyle2}>
    <ImageBackground style={styles.center2} source={require('../image/togethergrowtext.png')}></ImageBackground>
    <ImageBackground style={styles.center3} source={require('../image/twinheart.png')}></ImageBackground>
  </View>
  </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    
    justifyContent: "center",
    alignItems: "center",
    //height: 151,
    // Android Only
    elevation: 4,
    backgroundColor:"#FFFAF2"
  },
  headerStyle2: {
    paddingTop:60,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    
    // Android Only
  },
  textStyle: {
    fontSize: 20,
    color: "#705A31",
    fontWeight: "bold",
    paddingTop: 10,
  },

  center: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 390,
    height: 200,
    backgroundColor:"#FFFAF2"
  },
  center2: {
    marginTop:110,
    justifyContent: 'center',
    alignItems: 'center',
    width: 304,
    height: 50,
    
  },
  center3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 24,
    
  },

  leftButton: {
    position: 'absolute',
    paddingTop: 10,
    left: (windowWidth/24),
  },

  rightButton: {
    position: 'absolute',
    paddingTop: 10,
    right: (windowWidth/24),
  },

  iconStyle: {
    width: 25,
    height: 25,
  },
});

export default Header;