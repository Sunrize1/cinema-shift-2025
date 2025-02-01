import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { FilmInfo } from './pages/FilmInfo/FilmInfo';
import {TicketPayment} from './pages/TicketPayment/TicketPayment';
import { ROUTES } from './utils/constants/router';
import { store } from './utils/redux/store';

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN_ROOT,
    element: <Home />
  },
  {
    path: ROUTES.FILM_INFO,
    element: <FilmInfo />
  },
  {
    path: ROUTES.TICKET_PAYMENT,
    element: <TicketPayment />
  }
]);

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
