import React from 'react'

const Upload = (props) => {

  const { urlImage } =  props.datos

  return (
    <div>
        <img src={ urlImage } alt={ props.title } />
    </div>
  )
}

export default Upload