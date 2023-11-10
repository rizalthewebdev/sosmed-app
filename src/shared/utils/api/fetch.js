import axios from 'axios';

import merge from 'lodash.merge';

function fetch(params, headers = {}) {
  const instance = axios.create();
  // Create a new CancelToken source for this request
  const source = axios.CancelToken.source();

  const promise = instance({
    timeout: 20000,
    ...params,
    headers: merge(headers, params.headers),
    cancelToken: source.token,
  });

  // Cancel the request if React Query calls the `promise.cancel` method
  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query');
  };

  return promise;
}

export default fetch;
