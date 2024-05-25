import {View, Text} from 'react-native';
import React from 'react';

const Main4 = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        //backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 50,
          color: 'black',
          textAlignVertical: 'center',
          lineHeight: 180,
        }}>
        {'<'}
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 150,
          textAlign: 'center',
        }}>
        256
      </Text>
      <Text
        style={{
          fontSize: 50,
          color: 'black',
          textAlignVertical: 'center',
          lineHeight: 180,
        }}>
        {'>'}
      </Text>
    </View>
  );
};

export default Main4;
