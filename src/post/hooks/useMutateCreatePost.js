import {useNavigation} from '@react-navigation/native';
import useFlashMessage from '../../shared/hooks/useFlashMessage';
import useFetch from '../../shared/utils/api/useFetch';
import {C_CREATE_BLOG} from '../../shared/constants/c_api';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export default function useMutateCreatePost() {
  const {errorMessage, successMessage} = useFlashMessage();
  const {reset} = useNavigation();
  const queryClient = useQueryClient();
  const fetch = useFetch(data => ({
    method: 'POST',
    url: C_CREATE_BLOG,
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
        successMessage('Postingan Berhasil dibuat');
        queryClient.invalidateQueries(['post_lists']);
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
