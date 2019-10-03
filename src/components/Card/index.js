import React from 'react'

const Card = ({props}) => {
    const {name, dateFrom, dateTo, guests, category, image, copy} = props
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */
    const cardImage = require(`../../assets/${image}`)

    return (
        <div className="card-wrap">
            <h3 className="card-name">{name}</h3>
            <div className="img-row">
                <img className="image" src={cardImage} alt="card-img" />
            </div>
            <h4 className="card-name">{name}</h4>
            <p className="category">{category}</p>

            <div className="date-row">
                <p className="card-text">
                    {dateFrom} - {dateTo}
                </p>
            </div>

            <div className="card-row">
                <p className="card-text">guests: {guests}</p>
                <p className="card-copy">{copy}</p>
            </div>
        </div>
    )
}

export default Card
