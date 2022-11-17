import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return <div className="App">App</div>
}

export default App
