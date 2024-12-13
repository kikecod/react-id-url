import { useParams } from 'react-router-dom';

export default function DetailsPage() {
  const { id } = useParams(); // Captura el parámetro 'id' de la URL

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <p><strong>ID del producto:</strong> {id}</p>
      <p>Información simulada para el producto con ID <strong>{id}</strong>.</p>
    </div>
  );
}