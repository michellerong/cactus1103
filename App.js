import 'react-native-gesture-handler';
import React , { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground,ScrollView } from "react-native";
import Header from "./src/components/Header";
import Header2 from "./src/components/Header2";
import Loginpage from "./src/pages/Loginpage";
import Registerpage from "./src/pages/Registerpage";
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <Header/>
         <View style={styles.container}>
       <ImageBackground  style={styles.center} source={require('./src/image/togethergrow.png')} >
      
      </ImageBackground>
      <View style={styles.container2}>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={styles.login}>
        
      <Text style={styles.loginstyle}>登入</Text>
      
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={() => setModalVisible(true)}>
      <View style={styles.register}>
      <Text style={styles.loginstyle}>註冊</Text>
      
      </View>
      </TouchableOpacity>
      
      <View style={styles.container3}>
        <ImageBackground  style={styles.center3} source={require('./src/image/bottomheader.png')} >
      
      </ImageBackground>
      </View>
      
        </View>
        </View>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    width:390,
    height:844,
    marginTop:140,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#FFFAF2"
    },
    container2: {
      flex:1,
      marginTop:80,
      alignItems: "center",
    },
    container3: {
      marginTop:72,
      alignItems: 'flex-end',
    },
    center: {
  marginTop:80,
      width: 356,
      height: 198,
    },
    center2: {
      marginBottom:20,
      width: 266,
      height: 63,
    },
    center3: {
  
      width: 390,
      height: 58,
    },
    loginstyle:{
      color:"#FFFAF2",
      fontSize:16,
      fontWeight:"bold"
    },
    login:{
      width: 266,
      height: 63,
      justifyContent: "center",
      alignItems: "center",
      borderRadius:15,
      backgroundColor:"#62935F",
    },
    register:{
      width: 266,
      height: 63,
      marginTop:10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius:15,
      backgroundColor:"#816B42",
    },
    touch:{
      marginTop:20
    },
});
export default App


