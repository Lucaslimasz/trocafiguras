import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from '../pages/auth/register';
import Login from '../pages/auth/login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<h1>A página não existe</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
