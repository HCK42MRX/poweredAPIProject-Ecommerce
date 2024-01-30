import React from 'react'
import Navbar from '../Components/Navbar'
import CardItems from '../Components/CardItems'

function Home () {
  return (
    <>
        <Navbar />
        <div className="bg-blue-300 best-layout py-5 box-border">
        <CardItems/>
        </div>
    </>
  )
}

export default Home
