import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from './image/image'
import './gallary.styles.css'


const Gallary = ({ photoOfTheDay }) => {
    let [photos, setPhotos] = useState([])
    let [special, setSpecial] = useState('')
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=WIaoKzUsGrLNS3drIEbdhrdI4LKLDsX928keC32l')
            .then((response) => response.data)
            .then((data) => data)
            .then((el) => {
                setSpecial(special = el.url)

            }).then(() => {
                console.log(special)
            })

    }, [])


    return (
        <div className={'image-container'}>
            <Image special={special}></Image>
        </div>
    )
}

export default Gallary