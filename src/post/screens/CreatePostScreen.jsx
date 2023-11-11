import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {gStyles} from '../../shared/styles/gStyles';
import CreatePostHeader from '../components/CreatePostHeader';
import CreatePostSection from '../components/CreatePostSection';

const CreatePostScreen = () => {
  return (
    <SafeAreaView style={gStyles.flex1}>
      <CreatePostHeader />
      <CreatePostSection />
    </SafeAreaView>
  );
};

export default CreatePostScreen;
