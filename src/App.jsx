
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './compontents/CoffeeCard';

function App() {
  const alldata =useLoaderData();

  return (
    <div className='w-10/12 mx-auto'>
      <h1 className='text-center text-5xl py-5'>Cole Coffee {alldata.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          alldata.map((data,idx) => <CoffeeCard key={idx} data={data}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
