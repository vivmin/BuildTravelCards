import React, {useState, useEffect} from 'react'
import response from '../../response/response'
import Guests from '../Guests'
import getImageName from '../../helpers/getImageName'
import './TripPage.css'

function TripPage({match, history}) {
    const id = match.params.id
    const [trip, setTrip] = useState({})

    const {name, dateFrom, dateTo, guests, category, image, copy} = trip

    useEffect(() => {
        setTrip(response[id])
        history.push(`/trip/${id}/${name}`)
    }, [id, name, trip, history])

    function importImage(loadImage) {
        let cardImage
        try {
            cardImage = require(`../../assets/${loadImage}`)
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
                alt={image ? getImageName(image) : name}></img>
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
