import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { EmpleadosPage, ProductosPage } from "../pages";

const LayoutLazy = () => {
  return (
    <div>
      <h1>Lazy Layout</h1>

      <ul>
        <li>
          <NavLink to="componente1">Ruta componente1</NavLink>
        </li>
        <li>
          <NavLink to="componente2">Ruta componente2</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="componente1" element={<EmpleadosPage />} />
        <Route path="componente2" element={<ProductosPage />} />
        <Route path="*" element={<Navigate to="componente1" replace />} />
      </Routes>
    </div>
  );
};

export default LayoutLazy;