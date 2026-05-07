import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Analyze from './components/Analyze';
import PlantDetail from './components/PlantDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/plant/:id" element={<PlantDetail />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;