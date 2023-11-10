import React, {useRef} from 'react';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {persistQueryClient} from '@tanstack/react-query-persist-client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashProvider from './utils/providers/SplashProvider';
import {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import AppNavigator from './routes/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      networkMode: 'online',
      staleTime: 1000 * 60 * 60 * 20, // 20 hours
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      meta: {
        persist: false,
      },
    },
  },
});

const syncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

persistQueryClient({
  queryClient,
  persister: syncStoragePersister,
  dehydrateOptions: {
    shouldDehydrateQuery: query => {
      const shouldPersist = query?.meta?.persist ?? false;
      return shouldPersist;
    },
  },
});

export default function App() {
  const flashMessageRef = useRef();

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 250);
  }, []);

  return (
    <SplashProvider {...{isAppReady}}>
      <Provider {...{store}}>
        <PersistGate loading={null} {...{persistor}}>
          <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
              <NavigationContainer>
                <AppNavigator />
                <FlashMessage position="top" floating ref={flashMessageRef} />
              </NavigationContainer>
            </QueryClientProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </SplashProvider>
  );
}
