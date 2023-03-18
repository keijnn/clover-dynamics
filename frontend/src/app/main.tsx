//import modules
import React from 'react'
import ReactDOM from 'react-dom/client'

//import app
import { App } from './App'

//import layout
import { MainLayout } from '@/layouts/MainLayout'

//import styles
import './main.css'
import { Routing } from '@/pages'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainLayout>
      <Routing />
    </MainLayout>
  </React.StrictMode>
)
