import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Route as RouteType } from './route';

export type HomeAspectAppProps = {
  /**
   * root routes to use.
   */
  routes: RouteType[],
}

export function HomeAspectApp({ routes }: HomeAspectAppProps) {
  return (
    <div>
      <div>Header</div>
      <Routes>
        {routes.map((route) => {
          const RouteComponent = route.component;
          return <Route key={route.path} path={route.path} element={<RouteComponent />} />;
        })}
        <Route path='*' element={<>Page not found!</>} />
      </Routes>
      <div>Footer</div>
    </div>
  );
}    
