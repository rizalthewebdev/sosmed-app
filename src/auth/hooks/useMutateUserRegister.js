import {useMutation} from '@tanstack/react-query';
import {C_USER_REGISTER} from '../../shared/constants/c_api';
import useFlashMessage from '../../shared/hooks/useFlashMessage';
import useFetch from '../../shared/utils/api/useFetch';
import {useNavigation} from '@react-navigation/native';

export default function useMutateUserRegister() {
  const {errorMessage, successMessage} = useFlashMessage();
  const {reset} = useNavigation();
  const fetch = useFetch(data => ({
    method: 'POST',
    url: C_USER_REGISTER,
    data,
  }));

  return useMutation(
    data => {
      return fetch(data);
    },
    {
      //   onMutate: () => {
      //     ModalLoadingService.show();
      //   },
      //   onSettled: () => {
      //     ModalLoadingService.hide();
      //   },
      onSuccess: response => {
        successMessage('Registrasi Berhasil silahkan lakukan login');
        reset({
          index: 0,
          routes: [
            {
              name: 'LoginScreen',
            },
          ],
        });
      },
      onError: error => {
        errorMessage(error);
      },
    },
  );
}
