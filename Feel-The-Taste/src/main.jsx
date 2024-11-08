import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import thema from './thema';
import OverOns from './pages/OverOns/OverOns';
import DienstenEnProducten from './pages/DienstenEnProducten/DienstenEnProducten';
import VoorHoreca from './pages/VoorHoreca/VoorHoreca';
import VoorBlindenEnSlechtzienden from './pages/VoorBlindenEnSlechtzienden/VoorBlindenEnSlechtzienden';
import Samenwerkingen from './pages/Samenwerkingen/Samenwerkingen';
import SteunOns from './pages/SteunOns/SteunOns';
import Testimonials from './pages/Testimonials/Testimonials';
import Sponsors from './pages/Sponsors/Sponsors';
import './i18n/i18n';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate replate to='/home' />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/over-ons',
        element: <OverOns />,
      },
      {
        path: '/diensten-en-producten',
        element: <DienstenEnProducten />,
      },
      {
        path: '/voor-horeca',
        element: <VoorHoreca />,
      },
      {
        path: '/samenwerkingen',
        element: <Samenwerkingen />,
      },
      {
        path: '/steun-ons',
        element: <SteunOns />,
      },
      {
        path: '/testimonials',
        element: <Testimonials />,
      },
      {
        path: '/sponsors',
        element: <Sponsors />,
      },
      {
        path: '/voor-blinden-en-slechtzienden',
        element: <VoorBlindenEnSlechtzienden />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={thema}>
      <RouterProvider router={router}>
      </RouterProvider>
    </ChakraProvider>
  </StrictMode>,

);