import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Gallary = ({ photoOfTheDay }) => {
    let [photos, setPhotos] = useState([])
    useEffect(() => {
        axios.get()
    })
    return (
        <div>
            <h1>Hello World</h1>
            {console.log(photos)}
        </div>
    )
}

export default Gallary