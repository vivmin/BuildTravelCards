import React from 'react'
import {Link} from 'react-router-dom'
import Guests from '../Guests'
import getImageName from '../../helpers/getImageName'

const Card = ({props}) => {
    const {name, dateFrom, dateTo, guests, category, image, copy} = props
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
            <Link to={{pathname: `/trip/${name}`, state: {trip: props}}}>
                <img className="card-image" src={importImage(image)} alt={getImageName(image)} />
            </Link>
            <div className="card-content-wrap">
                <h2 className="card-name">{name}</h2>
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
