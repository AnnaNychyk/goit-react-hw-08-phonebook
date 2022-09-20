import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Register from 'pages/Register';
import Login from 'pages/Login';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { current } from 'redux/auth/auth-operations';

const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Suspense fallBack={<p>...loading</p>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route
              path="/"
              element={
                <h1>
                  Welcome to the phone book. Please sign in to access your
                  contacts.
                </h1>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Phonebook />} />
          </Route>
          <Route path="*" element={<p>Not Found page</p>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
