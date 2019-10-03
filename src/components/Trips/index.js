import React, {useState} from 'react'
import response from '../../response/response'
import Card from '../Card'
import './trips.css'

const initialTripsNum = 6
const newTripsNum = 6
const initialNextTripsNum = initialTripsNum + newTripsNum

function Trips() {
    const trips = response
    const [shownTrips, setShownTrips] = useState(() => trips.slice(0, initialTripsNum))
    const [nextTripsNum, setNextTripNum] = useState(initialNextTripsNum)

    async function loadMoreTrips() {
        setShownTrips(trips.slice(0, nextTripsNum))
        setNextTripNum(prevLast => prevLast + newTripsNum)
    }

    return (
        <div className="trips-wrap">
            <h4 className="heading">view latest trips</h4>
            <div className="trips-cards-wrap">
                {shownTrips.map(trip => (
                    <Card key={trip.name} props={trip} />
                ))}
            </div>
            {nextTripsNum - newTripsNum < trips.length ? (
                <button type="button" className="raise" onClick={loadMoreTrips}>
                    Load More
                </button>
            ) : (
                ''
            )}
            <div>{nextTripsNum}</div>
        </div>
    )
}

export default Trips
