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
    const [filterData, setFilterData] = useState('')
    const [shownTrips, setShownTrips] = useState(() => trips.slice(0, initialTripsNum))
    const [nextTripsNum, setNextTripNum] = useState(initialNextTripsNum)

    async function loadMoreTrips() {
        setShownTrips(trips.slice(0, nextTripsNum))
        setNextTripNum(prevLast => prevLast + newTripsNum)
    }

    const showButton = nextTripsNum - newTripsNum < trips.length

    const onTourSearch = e => {
        setFilterData(e.target.value)
    }

    return (
        <div className="trips-wrap">
            <div className="trips-header">
                <div className="trips-header--text">
                    <div className="trips-title">View Latest Trips</div>
                    <Badge label={nextTripsNum} />
                </div>
                <input
                    className="trips-search"
                    value={filterData}
                    onChange={e => onTourSearch(e)}
                    type="text"
                    placeholder="Search a Trip"
                />
            </div>
            <div className="trips-cards-wrap">
                {shownTrips
                    .filter(trip => trip.name.includes(filterData))
                    .map((trip, index) => {
                        console.log(trip.name)
                        return <Card key={`trip.name${index}`} props={trip} />
                    })}
            </div>
            {showButton && <Button label="Load More" onClick={loadMoreTrips} />}
        </div>
    )
}

export default Trips
