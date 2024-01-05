import React from 'react'
import './App.css'
import { NavBar } from './navbar'
import { Grid } from './hero'
import { Card } from './Card'

function App (){
  return (
    <>
      <NavBar />
      <Grid />
      <div className='cards'>
        <Card 
        img="../src/images/swimmer.jpeg"
        rating="5.0"
        country= "USA"
        title="Life lessons from Kopie Zohan"
        price="from $135" />

        <Card img="../src/images/swimmer.jpeg"
        rating="5.0"
        country= "USA"
        title="Life lessons from Issifu Banda"
        price="from $165" />

        <Card img="../src/images/swimmer.jpeg"
        rating="5.0"
        country= "USA"
        title="Life lessons from Damian Clurge"
        price="from $535" />

        <Card img="../src/images/swimmer.jpeg"
        rating="5.0"
        country= "USA"
        title="Life lessons from Kwame Darius"
        price="from $1135" />

      </div>
      
      

    </>
    
  )
}



export default App
