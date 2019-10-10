import React from 'react'

const ICON_URL = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg'

const Guests = ({amount}) => {
    return (
        <div className="guests-wrap">
            {[...Array(amount)].map(() => (
                <img alt="Icon of a human" src={ICON_URL} className="guests-icon" />
            ))}
        </div>
    )
}

export default Guests
