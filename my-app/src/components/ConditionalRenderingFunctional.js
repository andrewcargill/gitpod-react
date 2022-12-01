import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>
        <div>
        ConditionalRenderingFunctional
        </div>
    </div>
  )
}

export default ConditionalRenderingFunctional