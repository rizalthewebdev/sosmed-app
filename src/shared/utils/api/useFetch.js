import {useCallback} from 'react';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';

import isEmpty from 'lodash.isempty';
import fetch from './fetch';
import useFlashMessage from '../../hooks/useFlashMessage';
import {baseUrl as baseURL} from '../../constants/c_api';
import useHandleLogout from '../../hooks/useHandleLogout';

const waitForInteraction = () => {
  return new Promise(resolve => {
    requestAnimationFrame(() => resolve());
  });
};

export default function useFetch(fetchFn) {
  const {accessToken} = useSelector(state => state?.TokenReducer) || '';
  const {errorMessage} = useFlashMessage();

  const handleLogout = useHandleLogout();

  const handleFetch = useCallback(
    async args => {
      function polyfillFetchConfig(baseConfig) {
        return {
          baseURL,
          ignoreError: false,
          showError: baseConfig.method === 'GET' ? false : true,
          ...baseConfig,
        };
      }

      const _fetchConfig = await fetchFn(args);
      const fetchConfig = polyfillFetchConfig(_fetchConfig);
      await waitForInteraction();
      return fetch(fetchConfig, {
        'x-source': Platform.OS,
        'x-lang': 'id',
        ...(!isEmpty(accessToken)
          ? {
              authorization: `Bearer ${accessToken}`,
            }
          : {}),
      }).catch(err => {
        if (err.response) {
          if (err.response.status === 502) {
            errorMessage(
              'Ups, terjadi kesalahan. \nsilakan coba beberapa saat lagi.',
            );
          }
          if (fetchConfig.showError) {
            errorMessage(err);
          }
          if (
            err.response?.data?.message?.includes('Unauthenticated') ||
            err.response?.data?.message?.includes('jwt')
          ) {
            handleLogout();
            throw err;
          } else {
            throw err;
          }
        }
        throw err;
      });
    },
    [accessToken, errorMessage, fetchFn, handleLogout],
  );
  return handleFetch;
}
