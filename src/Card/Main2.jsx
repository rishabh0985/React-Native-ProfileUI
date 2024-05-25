import {View, Text, Image} from 'react-native';
import React from 'react';

const Main2 = () => {
  return (
    <View
      style={{
        flex: 1,

        flexDirection: 'row',
        gap: 20,
      }}>
      <View style={{justifyContent: 'center'}}>
        <Image
          source={{uri: 'https://picsum.photos/200/300.jpg'}}
          style={{
            // flex: 1,
            height: 120,
            width: 90,

            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'flex-start',
          justifyContent: 'center',
          // backgroundColor: 'yellow',
        }}>
        <Text style={{color: 'black', textAlign: 'center', opacity: 0.3}}>
          Hello again!
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 45,
            textAlign: 'center',
            opacity: 0.8,
          }}>
          Monica
        </Text>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            opacity: 0.7,
          }}>
          ⚡ fITNESS BEGINNER
        </Text>
      </View>
    </View>
  );
};

export default Main2;
