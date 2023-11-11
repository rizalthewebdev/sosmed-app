import {useCallback} from 'react';
import {showMessage} from 'react-native-flash-message';

export default function useFlashMessage() {
  const errorMessage = useCallback(message => {
    var error = '';
    if (message?.response) {
      if (
        message?.response?.data?.message?.includes('Unauthenticated') ||
        message?.response?.data?.message?.includes('jwt')
      ) {
        error = 'Session telah habis. Silahkan melakukan login ulang.';
      } else {
        error = message?.response?.data?.message;
      }
    } else {
      error = message?.toString();
    }

    if (
      message?.response?.data?.message.includes('Not found') ||
      message?.response?.data?.message.includes('URL Not Found')
    ) {
      return null;
    }
    return showMessage({
      message: error,
      type: 'danger',
      backgroundColor: '#8E0A0A',
    });
  }, []);

  const successMessage = useCallback(message => {
    showMessage({
      message: message?.response ? message?.response?.data?.message : message,
      type: 'success',
      backgroundColor: '#34A320',
      icon: 'success',
      position: 'top',
    });
  }, []);

  return {errorMessage, successMessage};
}
