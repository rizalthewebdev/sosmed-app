/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {gStyles} from '../../shared/styles/gStyles';
import TextView from '../../shared/components/TextView';
import useValidateCreatePost from '../hooks/useValidateCreatePost';
import useMutateCreatePost from '../hooks/useMutateCreatePost';

const CreatePostSection = () => {
  const [post, setPost] = useState({name: '', image: '', description: ''});
  const validate = useValidateCreatePost();
  const {mutateAsync: mutateCreatePost, isLoading} = useMutateCreatePost();

  const handleCreatePost = () => {
    validate(post, data => mutateCreatePost(data));
  };

  return (
    <SafeAreaView style={gStyles.flex1}>
      <ScrollView>
        <View style={[gStyles.ma4]}>
          <TextInput
            mode="outlined"
            label="Title"
            value={post.name}
            onChangeText={name => setPost(prevData => ({...prevData, name}))}
            style={[gStyles.mb4]}
          />
          <TextInput
            mode="outlined"
            label="Image URL"
            value={post.image}
            onChangeText={image => setPost(prevData => ({...prevData, image}))}
            style={[gStyles.mb4]}
          />
          <TextInput
            textAlignVertical="top"
            mode="outlined"
            label="Description"
            value={post.description}
            multiline={true}
            onChangeText={description =>
              setPost(prevData => ({...prevData, description}))
            }
          />
        </View>
      </ScrollView>
      <Button
        style={gStyles.ma4}
        onPress={handleCreatePost}
        buttonColor="#111"
        loading={isLoading}
        mode="contained">
        <TextView style={{color: 'white'}} text="Buat" />
      </Button>
    </SafeAreaView>
  );
};

export default CreatePostSection;
