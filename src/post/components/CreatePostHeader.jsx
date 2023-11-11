import React from 'react';
import {Appbar} from 'react-native-paper';
import {gStyles} from '../../shared/styles/gStyles';
import {useNavigation} from '@react-navigation/native';

const CreatePostHeader = () => {
  const {goBack} = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content
        title="Buat Postingan"
        titleStyle={[gStyles.fontSemiBold]}
      />
    </Appbar.Header>
  );
};

export default CreatePostHeader;
