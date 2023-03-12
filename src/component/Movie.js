import React from 'react'

export default function movie(props) {
  return (
    <div className='movie'>
      

        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>Year:{props.year}</p>
      
     </div>

  )
}
