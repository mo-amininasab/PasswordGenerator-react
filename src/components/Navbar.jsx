import React from 'react'

function Navbar() {
    return (
        <nav className='text-center p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
            <h1 className="text-2xl font-semibold text-white mb-2">PasswordGenerator</h1>
            <a href='/' className="text-gray-50">About me</a>
        </nav>
    )
}

export default Navbar
