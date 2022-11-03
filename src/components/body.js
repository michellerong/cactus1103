import React from "react";
import {Image, View,} from "react-native";

const Body = () => {
    return (
        <View>
          
          <Image style={styles.iconStyle} source={require('../../assets/rabbit.png')} />
      
        </View>
    );
  };

  const styles = StyleSheet.create({
    
    iconStyle: {
      width: 77,
      height: 77,
    },
  });
  
  export default Body;
