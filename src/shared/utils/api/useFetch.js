import {useCallback} from 'react';
import {Platform} from 'react-native';
import {useConfig} from '../../config/ConfigConsumer';
import {useSelector} from 'react-redux';

import isEmpty from 'lodash.isempty';
import fetch from './fetch';
import useLogoutAccount from '../../../account/hooks/useLogoutAccount';
import useFlashMessage from '../../hooks/useFlashMessage';

const waitForInteraction = () => {
  return new Promise(resolve => {
    requestAnimationFrame(() => resolve());
  });
};

export default function useFetch(fetchFn) {
  const {config} = useConfig();
  const {accessToken} = useSelector(state => state.tokenReducer);
  const {errorMessage} = useFlashMessage();

  const handleLogout = useLogoutAccount();

  const handleFetch = useCallback(
    async args => {
      function polyfillFetchConfig(baseConfig) {
        return {
          baseURL: config.baseUrl,
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
            err.response?.data?.message?.includes('Unauthorized') ||
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
    [accessToken, config.baseUrl, errorMessage, fetchFn, handleLogout],
  );
  return handleFetch;
}
