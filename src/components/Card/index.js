import React from 'react'
import {Link} from 'react-router-dom'
import Guests from '../Guests'
import getImageName from '../../helpers/getImageName'
import './card.css'

const Card = ({trip}) => {
    const {name, id, dateFrom, dateTo, guests, category, image, copy} = trip
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */

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
        <div className="card-wrap">
            <Link to={`/trip/${id}/${name}`}>
                <img className="card-image" src={importImage(image)} alt={getImageName(image)} />
            </Link>
            <div className="card-content-wrap">
                <Link className="card-link" to={`/trip/${id}/${name}`}>
                    <h2 className="card-name">{name}</h2>
                </Link>
                <p className="card-date">
                    {dateFrom} - {dateTo}
                </p>
                <p className="card-copy">{copy}</p>
                <div className="card-bottom-wrap">
                    <div className="card-category">{category}</div>
                    <Guests amount={guests} />
                </div>
            </div>
        </div>
    )
}

export default Card
