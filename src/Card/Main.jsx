import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Main = () => {
  const handleFirstViewClick = () => {
    console.log('First view clicked');
  };

  const handleSecondViewClick = () => {
    console.log('Second view clicked');
  };

  return (
    <View
      style={{
        // backgroundColor: 'pink',
        height: 90,
        margin: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={handleFirstViewClick}>
        <View
          style={{
            backgroundColor: '#ededed',
            height: 55,
            width: 55,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 45,
              textAlign: 'justify',
              textAlignVertical: 'center',
              lineHeight: 60,
              // backgroundColor: 'red',
            }}>
            ∷
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSecondViewClick}>
        <View
          style={{
            backgroundColor: '#ededed',
            height: 55,
            width: 55,
            alignItems: 'center',
            borderRadius: 30,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 25}}>⚙️</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
