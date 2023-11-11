import React from 'react';
import AppHeader from '../components/AppHeader';
import CreatePostButton from '../../post/components/CreatePostButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {gStyles} from '../../shared/styles/gStyles';
import PostList from '../components/PostList';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const {navigate} = useNavigation();

  const handleNavigateToCreatePost = () => {
    navigate('CreatePostScreen');
  };

  return (
    <SafeAreaView style={gStyles.flex1}>
      <AppHeader />
      <PostList />
      <CreatePostButton onPress={handleNavigateToCreatePost} />
    </SafeAreaView>
  );
};

export default MainScreen;
