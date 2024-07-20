import { useState } from 'react'
import Button from '@harpreet547/esm_jest_library/dist/components/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <Button
        onClick={() => setCount(count + 1)}
        text='Increment'
      />
    </>
  )
}

export default App
