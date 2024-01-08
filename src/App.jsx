import React from 'react'
import './App.css'
import { NavBar } from './navbar'
import { Grid } from './hero'
import { Card } from './Card'
import carddata from './carddata'

function App (){
  const cardElements = carddata.map(data => {
    return <Card 
    key={data.id}
    img={data.img} 
    rating={data.rating}
    country={data.country}
    title={data.title}
    price={data.price}
    openSpots={data.openSpots}/>
  })
  return (
    <>
      <NavBar />
      <Grid />
      <div className='cards'>
        {cardElements}
        
      </div>

    </>
    
    
    
  )
}



export default App
