import React from 'react'

import './image.styles.css'

const Image = (props) => {
    if(props.special === 1){
        return <h1>Loading. . .</h1>
    }
return <img src={`${props.special}`}></img>
  
}

export default Image