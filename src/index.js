import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserContextProvider from './Context/Usercontext';
import { QueryClient, QueryClientProvider  } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools'
const root = ReactDOM.createRoot(document.getElementById('root'));
let queryclient = new QueryClient();
root.render(
<QueryClientProvider client={queryclient}>
<UserContextProvider>
      <App />
    </UserContextProvider>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
</QueryClientProvider>
);
