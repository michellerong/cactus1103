/*此檔案只有Header 樣式 */
import React , { useState }  from "react";
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity } from "react-native";

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Header2 = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const{title} = props;
  return (
    <View style={styles.headerStyle}>
    <ImageBackground  style={styles.center} source={require('../image/header.png')} >
      <TouchableOpacity style={styles.leftButton} onPress={()=>setModalVisible(true)}>
        <Image style={styles.iconStyle} source={require('../image/left_nav.png')} />
      </TouchableOpacity>

      <Text style={styles.textStyle}>{props.title}</Text>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    // Android Only
    elevation: 4
  },
  textStyle: {
    fontSize: 20,
    color: "#705A31",
    fontWeight: "bold",
    paddingTop: 60,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: 136,
  },

  leftButton: {
    position: 'absolute',
    paddingTop: 60,
    left: 28,

  },

  rightButton: {
    position: 'absolute',
    paddingTop: 10,
    right: (windowWidth/24),
  },

  iconStyle: {
    width: 32,
    height: 32,
  },
});

export default Header2;