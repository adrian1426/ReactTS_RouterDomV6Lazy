import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string,
  nameNavLink: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
};

const UsuariosPage = lazy(() => import(/*webpackChunkName: "Chunk_UsuariosPage"*/'../module-lazy-load/pages/UsuariosPage'));
const ProductosPage = lazy(() => import(/*webpackChunkName: "Chunk_ProductosPage"*/'../module-lazy-load/pages/ProductosPage'));
const EmpleadosPage = lazy(() => import(/*webpackChunkName: "Chunk_EmpleadosPage"*/'../module-lazy-load/pages/EmpleadosPage'));

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