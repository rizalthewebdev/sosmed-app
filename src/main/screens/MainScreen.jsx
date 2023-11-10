import React from 'react';
import {gStyles} from '../../shared/styles/gStyles';
import {Text, View} from 'react-native';

const MainScreen = () => {
  return (
    <View style={[gStyles.flex1, gStyles.flexCenter]}>
      <Text style={{fontFamily: 'Rubik-Bold', color: 'black'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, id!
        Mollitia animi est facere quas eaque doloribus placeat. Eveniet,
        ducimus.
      </Text>
    </View>
  );
};

export default MainScreen;
