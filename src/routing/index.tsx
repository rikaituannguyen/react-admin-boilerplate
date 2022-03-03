import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
const Home = lazy(() => import('../pages/Home'));

export default function Routing() {
  return (
    <App>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </App>
  );
}
