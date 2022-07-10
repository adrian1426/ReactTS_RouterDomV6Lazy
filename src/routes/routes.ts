import { EmpleadosPage, ProductosPage, UsuariosPage } from "../module-lazy-load/pages";

interface Route {
  to: string,
  nameNavLink: string,
  path: string,
  Component: () => JSX.Element
};

export const routes: Route[] = [
  {
    to: '/usuarios',
    nameNavLink: 'usuarios',
    path: '/usuarios',
    Component: UsuariosPage
  },
  {
    to: '/productos',
    nameNavLink: 'Productos',
    path: '/productos',
    Component: ProductosPage
  },
  {
    to: '/empleados',
    nameNavLink: 'Empleados',
    path: '/empleados',
    Component: EmpleadosPage
  }
];