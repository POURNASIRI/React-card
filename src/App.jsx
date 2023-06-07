import { useState } from 'react'
import Crad from './card-component/Crad'
import img  from './card-component/photo_2023-06-06_17-45-26.jpg'
import './card-component/cardstyle.css'

function App() {
 

  return (
      <div>
        <Crad 
        title="lizard"
        text=" chevrolet is an iconic american car brand known for its reilable,dependable,and affordable vehicles.founded in 1911.chevy has become one of the most recognizable car brand in the world." 
        shearBtn="shear"
        moreBtn="learn More"
        img ={img}
        /> 
      </div>
  )

}

export default App
