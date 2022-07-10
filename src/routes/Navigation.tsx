import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from '../routes/routes';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            {
              routes.map(({ to, nameNavLink }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                  >
                    {nameNavLink}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

        <Routes>
          {
            routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))
          }

          <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default Navigation;