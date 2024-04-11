import React from 'react'
import MobileList from './MobileList'
import books from './books.json'


export default function Mobile() {
  return (
    <div>
        {books.map((ele)=>{
            return <MobileList
            img={ele.img}
            title={ele.title}
            price={ele.price}
            />

        })}
      
      
      
    </div>
  )
}
