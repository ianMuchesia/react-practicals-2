import React, { useState } from 'react'

const ImageSlider = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(2)

    const handleNext=()=>{
        if(currentIndex === images.length-1){
            setCurrentIndex(0)
        }else{
            setCurrentIndex(prevCurrentIndex=>prevCurrentIndex+1)
        }
    }
    const handlePrevious=()=>{
        if(currentIndex === 0){
            setCurrentIndex(images.length-1)
        }else{
            setCurrentIndex(prevCurrentIndex=>prevCurrentIndex-1)
        }
    }
  return (
    <div>
        <h1>{images[currentIndex].title}</h1>
        <img src={images[currentIndex].url} />
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default ImageSlider