import React from 'react'
import Header from './Header'

const allData = [
    {
    id: '1',
    title : "Amit",
    date: "23/12/2015",
    rollNumer: "67",
},
    {
    id: '2',
    title : "Abc",
    date: "13/02/2040",
    rollNumer: "7",
},
    {
    id: '3',
    title : "xxx",
    date: "05/05/2050",
    rollNumer: "99",
},
]

function Home() {
  return (
    <>
    <Header/>
   {allData.map((item,index) => (
    <>
    <div key={index}>
        <h1>{item.title}</h1>
        <h2>{item.date}</h2>
        <h3>{item.rollNumer}</h3>
    </div>
    </>
   ))}

</>

  )
}

export default Home