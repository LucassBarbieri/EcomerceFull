import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider, AccountContext } from './components/Context/Context';
import { useContext } from 'react';
import GlobalProvider from './components/Context/Context';

import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import DashAdmin from './components/DashAdmin/DashAdmin';
import DashClient from './components/DashClient/DashClient';

export const App = () => {

  const { checkuser, rolCheck } = useContext(AccountContext)

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <CartProvider>
            <Routes>

              <Route path="/" element={!checkuser ? <Landing /> : <Navigate to="/home" />} />
              <Route path="/home" element={<Landing />} />

              <Route path="/ingresar" element={<Login />} />
              <Route path="/landing" element={<Landing />} />

              {rolCheck === 'admin' && <Route path="/admin" element={<DashAdmin />} />}
              {rolCheck === 'cliente' && <Route path="/cliente" element={<DashClient />} />}

            </Routes>
          </CartProvider>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;