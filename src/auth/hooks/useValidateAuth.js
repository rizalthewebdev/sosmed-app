import {useCallback} from 'react';
import useFlashMessage from '../../shared/hooks/useFlashMessage';
import isValidEmail from '../../shared/utils/helpers/isValidEmail';

export default function useValidateAuth(type) {
  const {errorMessage} = useFlashMessage();
  const validate = useCallback(
    (data, handleLogin) => {
      const error = [];
      if (type === 'register') {
        if (data?.name === '') {
          error.push('Nama tidak boleh kosong');
        }
        if (data?.name.length < 3) {
          error.push('Nama tidak boleh kurang dari 3 karakter');
        }
      }
      if (data?.email === '') {
        error.push('Email tidak boleh kosong');
      }
      if (data?.email !== '' && !isValidEmail(data?.email)) {
        error.push('Email tidak valid');
      }
      if (data?.password === '') {
        error.push('Password tidak boleh kosong');
      }

      if (error.length > 0) {
        errorMessage(error[0]);
      } else {
        handleLogin(data);
      }
    },
    [errorMessage, type],
  );

  return validate;
}
