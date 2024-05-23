import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useRequireAuth } from './auth';
import Dashboard from './Pages/Dashboard';
import Login from './Form/Login';
import AdminForm from './Form/AdminForm';
import Registration from './Form/Registration';
// import Login from './Pages/Login'; 

const PrivateRoute = ({ element, ...props }) => {
  const isAuthenticated = useRequireAuth();

  return isAuthenticated ? (
    React.cloneElement(element, { ...props })
  ) : (
    <Navigate to="/" replace />
  );
};

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/admin" element={<AdminForm />} />

        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
  )
}

export default MainRouter;
