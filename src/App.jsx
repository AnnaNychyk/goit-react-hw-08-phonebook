import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navbar from './components/Navbar/Navbar';

const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallBack={<p>...loading</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <h1>
                Welcome to the phone book. Please sign in to access your
                contacts.
              </h1>
            }
          />
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="/register" element={<p>Register page</p>} />
          <Route path="/login" element={<p>Login page</p>} />
          <Route path="*" element={<p>Not Found page</p>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
