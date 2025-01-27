import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home';

import { ROUTES } from './utils/constants/router';
import { store } from './utils/redux/store';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Home />
  }
]);

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
