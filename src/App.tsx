import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import DetailsPage from './components/DetailsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}