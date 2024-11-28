
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './compontents/CoffeeCard';
import { useState } from 'react';

function App() {
  const alldata =useLoaderData();
  const [coffees,setCoffees] =useState(alldata) 

  return (
    <div className='w-10/12 mx-auto'>
      <h1 className='text-center text-5xl py-5'>Cole Coffee {alldata.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map((data,idx) => <CoffeeCard key={idx}
           data={data}
           coffees={coffees}
           setCoffees={setCoffees}
           ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
