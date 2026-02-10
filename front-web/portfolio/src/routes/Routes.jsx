import React from 'react'
import { useRoutes } from 'react-router'
import { Layout } from '../pages/Layout'
import { Home } from '../pages/home/Home_temp'
import { NotFound } from '../pages/notFound/NotFound'

export function Routes() {
    const routes = useRoutes([
        {
            path: "/", 
            element:<Layout/>, 
            children: [
            {index: true, element: <Home/>}
        ]},
        { path: "*", element: <NotFound/>}
    ])
  return routes;
}