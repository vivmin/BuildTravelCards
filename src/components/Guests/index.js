import React from 'react'
import nanoid from 'nanoid';

const ICON_URL = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg'

const getGuestsIcon = (amount) => {
    const keys = [...Array(amount)].map(() => nanoid());
    return [...Array(amount)].map((data, idx) => (
        <img key={keys[idx]} alt="Icon of a human" src={ICON_URL} className="guests-icon" />
    ))
}

const Guests = ({amount}) => {
    return (
        <div className="guests-wrap">
            {getGuestsIcon(amount)}
        </div>
    )
}

export default Guests
