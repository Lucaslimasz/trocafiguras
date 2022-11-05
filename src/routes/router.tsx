import { Route, Routes } from 'react-router-dom';

import Register from '../pages/auth/register';
import Login from '../pages/auth/login';
import Home from '../pages/home';

import { PrivateRoutes } from 'routes';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<PrivateRoutes />}>
        <Route path='Home' element={<Home />} />
      </Route>
      <Route path='*' element={<h1>A página não existe</h1>} />
    </Routes>
  )
}
