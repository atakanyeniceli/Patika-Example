import React from 'react'
import { city } from '../Data/Data'

function Header() {
    return (
        <div>
            <label htmlFor='citys'>Choose a City:</label>
            <select name="city" id="citys">
                {city}
            </select>
        </div>
    )
}

export default Header
