import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Card7 = () => {
  const handleAddToDietPress = () => {
    // Handle ADD TO DIET press
  };

  const handleArrowPress = () => {
    // Handle arrow press
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,
      }}>
      <TouchableOpacity onPress={handleAddToDietPress}>
        <View
          style={{
            backgroundColor: '#e3ec79',
            flexDirection: 'row',
            borderWidth: 3,
            gap: 10,
            height: 70,
            width: 200,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#e3ec79',
              borderWidth: 2,
              width: 28,
              height: 28,
              alignItems: 'center',
              borderRadius: 28,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>+</Text>
          </View>
          <Text style={{color: 'black', fontSize: 15}}>ADD TO DIET</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleArrowPress}>
        <View
          style={{
            backgroundColor: 'black',
            height: 70,
            width: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            borderWidth: 5,
          }}>
          <Text style={{color: 'yellow', fontSize: 25}}>{'->'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card7;
