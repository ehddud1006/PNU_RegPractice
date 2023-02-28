import { Route, Routes } from 'react-router-dom';

import MainPage from '@/@page/main/Main';

export const PATH = {
  MAIN: '/',
};

const Router = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<MainPage />} />
    </Routes>
  );
};

export default Router;
