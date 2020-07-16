import React from 'react'
import './header.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaReact } from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <div className="heading-content">
                <h1> NASA Photo Gallary </h1>
                <div className="subtitle-wrapper">
                    <h2>“The probability of success is difficult to estimate; but if we never search the chance of success is zero.”</h2>
                </div>
                <FaReact className={'icon'} />
            </div>
        </header>

    )
}

export default Header