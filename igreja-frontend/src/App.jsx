import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; 
import { AdminDashboard } from './pages/AdminDashboard';
import { PrivateRoute } from './routes/PrivateRoute';
import Historia from './pages/Historia';
import AgendaCongregacao from './pages/AgendaCongregacao';

export default function App() {
  return (
    <Routes>
      {/* Rota principal: o site da Igreja */}
      <Route path="/" element={<Home />} />

      {/* Rota de Login: para você entrar no sistema */}
      <Route path="/login" element={<Login />} />

      <Route path="/historia" element={<Historia />} />

      <Route path="/agendacongregacao" element={<AgendaCongregacao />} />

      {/* Rota Protegida: O Painel de Controle de Quixeramobim */}
      <Route 
        path="/painelAdministrativo" 
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        } 
      />
    </Routes>
  )
}