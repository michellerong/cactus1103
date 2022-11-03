import React from 'react';
import {Image, View, Text} from 'react-native';
import {assets, SIZE, fonts} from '@src/constants';

const IconScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Flex1 /> */}
        <Text style={fonts.h3}>我是h3</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
          }}>
          {console.log('height:', SIZE.height, 'width:', SIZE.width)}
          <Image style={{width: 30, height: 30}} source={assets.winIcon} />
        </View>
      </View>
    );
  };
 
 
  export default IconScreen;