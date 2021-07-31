import React from 'react'

function DoubleBoarderContainer(props) {
    return (
        <div className="p-4 mt-2 text-center mx-auto my-6 w-52 max-w-xs border-double border-4 border-indigo-400 rounded-lg shadow-xl">
            {props.children}
        </div>
    )
}

export default DoubleBoarderContainer
