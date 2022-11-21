import React, { useEffect, useState } from 'react'

function App() {
  const [state, setState] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(({ message }) => setState(message))
  }, [])

  return <div className="App">App {state}</div>
}

export default App
