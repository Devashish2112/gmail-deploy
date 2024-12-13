import './App.css';
import SuspenseLoader from './components/common/SuspenseLoader';
import { Suspense, lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, RouterProvider, Route } from 'react-router-dom';
import { routes } from './routes/routes';

const ErrorComponent = lazy(() => import('./components/common/ErrorComponent'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Redirect to inbox */}
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />

      {/* Main Route */}
      <Route path={routes.main.path} element={<routes.main.element />}>
        {/* Nested Routes */}
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
        <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
      </Route>

      {/* Invalid Path Redirect */}
      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </>
  )
);

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
