import { Route, Routes } from 'react-router-dom';

import Login from '@/@page/Login';
import MainPage from '@/@page/main';
import Register from '@/@page/Register';

export const PATH = {
  LOGIN: '/',
  MAIN: '/main',
  REGISTER: '/register',
};

const Router = () => {
  return (
    <Routes>
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.MAIN} element={<MainPage />} />
      <Route path={PATH.REGISTER} element={<Register />} />
    </Routes>
  );
};

export default Router;
