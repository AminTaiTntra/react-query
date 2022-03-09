import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient , QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>

   <QueryClientProvider client={queryClient}>
      <App />
       <ReactQueryDevtools />
    </QueryClientProvider>,
  </React.StrictMode> ,
  document.getElementById('root')
);
