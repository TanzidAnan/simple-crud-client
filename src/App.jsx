
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
  const data =useLoaderData()
  return (
    <>
      <h1>Cole Coffee {data.length}</h1>
    </>
  )
}

export default App
