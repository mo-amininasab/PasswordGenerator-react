import React from 'react'

function ContainerCenter(props) {
    return (
        <div className="min-h-screen max-w-lg mx-auto flex flex-col text-center py-12 px-4 sm:px-6 lg:px-8">
            {props.children}
        </div>
    )
}

export default ContainerCenter
