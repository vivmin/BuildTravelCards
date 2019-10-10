import React from 'react'
import Guests from '../Guests'
import getImageName from '../../helpers/getImageName'

const Card = ({ props }) => {
    const { name, dateFrom, dateTo, guests, category, image, copy } = props
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */

    const cardImage = require(`../../assets/${!image ? 'default-image.jpg' : image}`);

    return (
        <div className="card-wrap">
            <img className="card-image" src={cardImage} alt={getImageName(image)} />
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
