import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DetailPostHeader from '../components/DetailPostHeader';

const DetailPostScreen = () => {
  const route = useRoute();
  const {name} = route?.params?.data;

  return (
    <SafeAreaView>
      <DetailPostHeader title={name} />
    </SafeAreaView>
  );
};

export default DetailPostScreen;
