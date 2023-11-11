import {useSelector} from 'react-redux';
import {C_LIST_BLOG} from '../../shared/constants/c_api';
import useFetch from '../../shared/utils/api/useFetch';
import {useCallback} from 'react';
import {useQuery} from '@tanstack/react-query';

export default function useQueryListPost() {
  const {accessToken} = useSelector(state => state.TokenReducer);
  const _fetch = useCallback(() => {
    return {
      method: 'GET',
      url: C_LIST_BLOG,
    };
  }, []);
  const fetch = useFetch(_fetch);

  return useQuery(['post_lists', accessToken], () => {
    if (!accessToken) return null;
    return fetch();
  });
}
