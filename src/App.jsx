import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy-loaded pages
const Login = lazy(() => import('./pages/auth/Login'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));
const Profile = lazy(() => import('./pages/Profile'));
const AddVendorPage = lazy(() => import('./pages/AddVendorPage'));
const TemplePoojariForm = lazy(() => import('./pages/TemplePoojariForm'));
const PoojaStoreForm = lazy(() => import('./pages/PoojaStoreForm'));
const AddPoojaPartner = lazy(() => import('./pages/AddPoojaPartner'));
const PoojaStoreServices = lazy(() => import('./pages/PoojaStoreServices'));
const TempleDetailsForm = lazy(() => import('./pages/AddTempleDetails'));
const TempleAdditions = lazy(() => import('./pages/TempleAdditions'));
const PoojaStoreDetails = lazy(() => import('./pages/PoojaStoreDetails'));
const MainLayout = lazy(() => import('./components/Layout'));

// Fallback loader
const Loader = () => <div className="text-center mt-10">Loading...</div>;

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Protected Routes with Layout */}
          <Route element={<MainLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/vendor" element={<AddVendorPage />} />
            <Route path="/temple-form" element={<TemplePoojariForm />} />
            <Route path="/pooja-store-form" element={<PoojaStoreForm />} />
            <Route path="/add-partner-form" element={<AddPoojaPartner />} />
            <Route path="/services" element={<PoojaStoreServices />} />
            <Route path="/temple-details" element={<TempleDetailsForm />} />
            <Route path="/temple-additions" element={<TempleAdditions />} />
            <Route path="/pooja-store" element={<PoojaStoreDetails />} />
          </Route>

          {/* Catch-all Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
