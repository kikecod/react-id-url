import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
  const [id, setId] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      navigate(`/details/${id}`); 
    } else {
      alert('Por favor, ingresa un ID válido');
    }
  };

  return (
    <div>
      <h1>Ingresar ID</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa un ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}