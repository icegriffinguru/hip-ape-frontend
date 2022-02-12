import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const Shop = lazy(() => import('./pages/shop'));
const Mint = lazy(() => import('./pages/mint'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
