import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className='text-center p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
            <Link to='/home' className="text-2xl block font-semibold text-white mb-2">PasswordGenerator</Link>
            <Link to='/about-me' className="text-gray-50">About me</Link>
        </nav>
    )
}

export default Navbar
