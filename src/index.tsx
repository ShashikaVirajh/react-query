import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';

const container = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(container);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
