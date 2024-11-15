import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import { useHello } from './hook/useHello'
import { useTime } from './hook/useTime'
import viteLogo from '/vite.svg'


import { Button } from '@aws-amplify/ui-react'
import { signOut } from 'aws-amplify/auth'
import { useUserData } from './hook/useUserData'

function App() {
  const [count, setCount] = useState(0)
  const { data: message } = useHello()
  const { data: time } = useTime()
  const { userId } = useUserData()


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        This is <code>/hello</code> response: {message}
      </p>
      <p>
        <code>/time</code>: {time}
      </p>
      <p>UserId: {userId}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}

export default App
