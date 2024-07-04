import React from 'react'
import { useRouteError } from 'react-router-dom'

function Empty() {
    const err = useRouteError("")
  return (
    <div>
        
        <h2 className="p-12 text-center font-bold">No News Found</h2>

    </div>
  )
}

export default Empty