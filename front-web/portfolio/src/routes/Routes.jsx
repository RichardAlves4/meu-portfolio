import React from 'react'
import { useRoutes } from 'react-router'
import { Layout } from '../pages/Layout'
import { Home } from '../pages/home/Home'

export function Routes() {
    const routes = useRoutes([
        {
            path: "/", 
            element:<Layout/>, 
            children: [
            {index: true, element: <Home/>}
        ]}
    ])
  return routes;
}