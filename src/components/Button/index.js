import React from 'react'

const Button = ({onClick, label}) => (
    <button type="button" className="button" onClick={() => onClick()}>
        {label}
    </button>
)

export default Button
