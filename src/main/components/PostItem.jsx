/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableNativeFeedback, View} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import TextView from '../../shared/components/TextView';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const PostItem = ({item}) => {
  const {navigate} = useNavigation();
  const handleNavigateToDetail = data => {
    navigate('DetailPostScreen', {data});
  };
  return (
    <TouchableNativeFeedback onPress={() => handleNavigateToDetail(item)}>
      <View style={[gStyles.ph4, gStyles.row, {paddingVertical: 8}]}>
        <Image
          source={{uri: item?.image}}
          style={{
            width: 80,
            height: 80,
            resizeMode: 'cover',
            borderRadius: 16,
            marginRight: 12,
          }}
        />
        <View style={[gStyles.flex1]}>
          <TextView text={item?.name} style={[gStyles.fontSemiBold]} />
          <TextView
            numberOfLines={2}
            style={{color: '#222'}}
            text={item?.description}
          />
          <TextView
            numberOfLines={2}
            style={{color: '#888', paddingTop: 4}}
            text={moment(item?.createdAt).format('DD MMM, YYYY')}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default PostItem;
