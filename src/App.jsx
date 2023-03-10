
import React from 'react'
import ImageSlider from './ImageSlider'

const App = () => {
  const images=[
    {url:  "http://localhost:5174/1.png",title: "1" },
    {url:  "http://localhost:5174/2.png",title: "2" },
    {url:  "http://localhost:5174/3.png",title: "3" },
    {url:  "http://localhost:5174/4.png",title: "4" },
    {url:  "http://localhost:5174/5.png",title: "5" },
  ]
    
  
  return (
  <ImageSlider images={images}/>
  )
}

export default App