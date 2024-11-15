import { Authenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes.tsx'

import "@aws-amplify/ui-react/styles.css"

import { Header } from './components/Header.tsx'
import './index.css'

const router = createBrowserRouter(routes)

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    }
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authenticator.Provider>
      <Authenticator>
        <Header />
        <RouterProvider router={router} />
      </Authenticator>
    </Authenticator.Provider>
  </StrictMode>,
)
