import React, {useState} from 'react'
import response from '../../response/response'
import Badge from '../Badge'
import Button from '../Button'
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

    const showButton = nextTripsNum - newTripsNum < trips.length

    return (
        <div className="trips-wrap">
            <div className="trips-header">
                <div className="trips-title">View latest trips</div>
                <Badge label={nextTripsNum} />
            </div>
            <div className="trips-cards-wrap">
                {shownTrips.map(trip => (
                    <Card key={trip.name} props={trip} />
                ))}
            </div>
            {showButton && <Button label="Load More" onClick={loadMoreTrips} />}
        </div>
    )
}

export default Trips
