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
        window.scrollTo(0, 0)
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
        <div className="trip-grid-container">
            <div className="trip-header">
                <img
                    className="trip-thumbnail"
                    src={importImage(image)}
                    alt={image ? getImageName(image) : name}></img>
                <h2 className="trip-name">{name}</h2>
            </div>
            <div className="trip-descriptors">
                <div className="descriptor">
                    <Guests amount={guests} />
                </div>
                <div className="descriptor">
                    <img
                        className="icon-calendar"
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Calendar_icon_2.svg"
                        alt="calendar"></img>
                    <p className="trip-dates">
                        {dateFrom} - {dateTo}
                    </p>
                </div>
                <div className="descriptor">
                    <span className="trip-category">{category}</span>
                </div>
                <div className="trip-text descriptor">
                    <p>{copy}</p>
                </div>
            </div>
        </div>
    )
}

export default TripPage
