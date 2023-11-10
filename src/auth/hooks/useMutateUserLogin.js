import {useMutation} from '@tanstack/react-query';
import {C_USER_LOGIN} from '../../shared/constants/c_api';
import useFlashMessage from '../../shared/hooks/useFlashMessage';
import useFetch from '../../shared/utils/api/useFetch';
import {useDispatch} from 'react-redux';
import {login} from '../../shared/redux/actions/authActions';
import {useNavigation} from '@react-navigation/native';

export default function useMutateUserLogin() {
  const {errorMessage} = useFlashMessage();
  const {reset} = useNavigation();
  const dispatch = useDispatch();
  const fetch = useFetch(data => ({
    method: 'POST',
    url: C_USER_LOGIN,
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
        dispatch(login(response.data?.data));

        reset({
          index: 0,
          routes: [
            {
              name: 'MainScreen',
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
