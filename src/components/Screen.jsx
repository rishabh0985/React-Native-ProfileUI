import {View, Text} from 'react-native';
import React from 'react';
import Main from '../Card/Main';
import Main2 from '../Card/Main2';
import Main3 from '../Card/Main3';
import Main5 from '../Card/Main5';
import Main4 from '../Card/Main4';
import Card6 from '../Card/Card6';
import Card7 from '../Card/Card7';

const Screen = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#e3ec79'}}>
      <Main />
      <Main2 />
      <Main5 />
      <Main3 />
      <Main4 />
      <Card6 />
      <Card7 />
    </View>
  );
};

export default Screen;
