// src/routes/PrivateRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export function PrivateRoute({ children }) {
  const { authenticated, loading, user } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== 'ADMIN') {
    return <Navigate to="/login" />; 
  }

  return children;
}