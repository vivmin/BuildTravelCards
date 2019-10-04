import React from 'react'
import Guests from '../Guests'
import getImageName from '../../helpers/getImageName'
import { format, parseISO } from 'date-fns'

const Card = ({ props }) => {
    const { name, dateFrom, dateTo, guests, category, image, copy } = props
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */

    const cardImage = image ? require(`../../assets/${image}`) : '';


    return (
        <div className="card-wrap">
            <img className="card-image" src={cardImage} alt={getImageName(image)} />
            <div className="card-content-wrap">
                <h2 className="card-name">{name}</h2>
                <p className="card-date">
                    {format(parseISO(dateFrom), 'MMM do yyyy')} - {format(parseISO(dateTo), 'MMM do yyyy')}
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
