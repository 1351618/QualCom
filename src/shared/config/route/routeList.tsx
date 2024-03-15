import { RouteObject } from 'react-router-dom';
import { About } from '../../../pages/about/About';
import { Home } from '../../../pages/home/Home';
import { PrivacyPolicy } from '../../../pages/privacyPolicy/PrivacyPolicy';

export const routeList: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },

  {
    path: '/about/privacy_policy',
    element: <PrivacyPolicy />,
  },

  {
    path: '/*',
    element: (() => {
      return <div>error matherFucker</div>;
    })(),
  },
];
