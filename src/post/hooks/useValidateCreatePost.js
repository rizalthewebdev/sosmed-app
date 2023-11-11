import {useCallback} from 'react';
import useFlashMessage from '../../shared/hooks/useFlashMessage';

export default function useValidateCreatePost() {
  const {errorMessage} = useFlashMessage();
  const validate = useCallback(
    (data, handleCreatePost) => {
      const error = [];

      if (data?.name === '') {
        error.push('Judul postingan tidak boleh kosong');
      }

      if (data?.image === '') {
        error.push('Image URL tidak boleh kosong');
      }
      if (data?.description === '') {
        error.push('Description tidak boleh kosong');
      }

      if (error.length > 0) {
        errorMessage(error[0]);
      } else {
        handleCreatePost(data);
      }
    },
    [errorMessage],
  );

  return validate;
}
