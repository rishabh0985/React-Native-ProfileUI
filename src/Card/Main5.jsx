import {View, Text, Image} from 'react-native';
import React from 'react';
import image from '../../assets/image.png';

const Main5 = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={image} style={{width: 150, height: 100, opacity: 0.3}} />
    </View>
  );
};

export default Main5;
