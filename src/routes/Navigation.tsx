import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { EmpleadosPage, ProductosPage, UsuariosPage } from '../module-lazy-load/pages';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink
                to='/usuarios'
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                Usuarios
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/productos'
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/empleados'
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                Empleados
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/usuarios' element={<UsuariosPage />} />
          <Route path='/productos' element={<ProductosPage />} />
          <Route path='/empleados' element={<EmpleadosPage />} />

          <Route path='/*' element={<Navigate to='/usuarios' replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default Navigation;