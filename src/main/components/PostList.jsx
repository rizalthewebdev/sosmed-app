import React from 'react';
import {FlatList} from 'react-native';
import useQueryListPost from '../hooks/useQueryListPost';
import PostItem from './PostItem';

const PostList = () => {
  const {data} = useQueryListPost();
  const listPostData = data?.data?.data;

  return (
    <FlatList
      data={listPostData}
      renderItem={({item}) => <PostItem {...{item}} />}
    />
  );
};

export default PostList;
