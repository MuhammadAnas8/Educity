import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  const imgs = [gallery_1, gallery_2, gallery_3, gallery_4]
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
      {imgs.map((img,index) => (
        <img src={img} alt="" key = {index}/>
      ))}
      </div>
  <button className="btn btn-dark">View More <img src={white_arrow} alt="" /></button>

    </div>
  )
}

export default Campus
