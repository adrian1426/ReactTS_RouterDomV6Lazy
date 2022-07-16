import { lazy, LazyExoticComponent } from 'react';
import Venta from '../module-lazy-load/components/Venta';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string,
  nameNavLink: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
};

const Layout = lazy(() => import(/*webpackChunkName: "Chunk_Layout"*/'../module-lazy-load/layout/LayoutLazy'));
const UsuariosPage = lazy(() => import(/*webpackChunkName: "Chunk_UsuariosPage"*/'../module-lazy-load/pages/UsuariosPage'));

export const routes: Route[] = [
  {
    to: '/usuarios',
    nameNavLink: 'usuarios',
    path: '/usuarios',
    Component: UsuariosPage
  },
  {
    to: '/ventas',
    nameNavLink: 'ventas',
    path: '/ventas',
    Component: Venta
  },
  {
    path: '/layout/*',
    to: '/layout',
    nameNavLink: 'layout',
    Component: Layout
  }
];