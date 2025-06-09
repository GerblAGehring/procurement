import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/navigation/AppLayout';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import  EvaluationPage  from './pages/EvaluationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="bewertung" element={<EvaluationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
