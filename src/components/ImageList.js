import React from 'react'
import {ImageShow} from './ImageShow'
import './ImageList.css'

export const ImageList = ({images}) => {
  const renderImage = images.map((image) => {
    return <ImageShow image={image} key={image.id}/>
  })

  return (  
    <div className='image-list'>
      {renderImage}
    </div>
  )
}
