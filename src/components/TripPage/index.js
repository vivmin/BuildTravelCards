import React from 'react'
import Guests from '../Guests'
import getImageName from '../../helpers/getImageName'
import './TripPage.css'

function TripPage({location}) {
    const {name, dateFrom, dateTo, guests, category, image, copy} = location.state.trip

    function importImage(loadimage) {
        let cardImage
        try {
            cardImage = require(`../../assets/${loadimage}`)
        } catch (err) {
            cardImage = require(`../../assets/default-image.jpg`)
        }
        return cardImage
    }

    return (
        <main>
            <img
                className="trip-thumbnail"
                src={importImage(image)}
                alt={getImageName(image)}></img>
            <h2>{name}</h2>
            <span>
                {dateFrom} - {dateTo}
            </span>
            <Guests amount={guests} />
            <span className="trip-category">{category}</span>
            <p>{copy}</p>
        </main>
    )
}

export default TripPage
