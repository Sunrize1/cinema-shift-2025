import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootPage } from './pages/root';

import { ROUTES } from './utils/constants/router';
import { store } from './utils/redux/store';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootPage />
  }
]);

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
