import { Route, Routes } from 'react-router-dom';

import Login from '@/@page/login';
import MainPage from '@/@page/main';

export const PATH = {
  LOGIN: '/',
  MAIN: '/main',
};

const Router = () => {
  return (
    <Routes>
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.MAIN} element={<MainPage />} />
    </Routes>
  );
};

export default Router;
