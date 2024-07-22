import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-xl mt-5'>Places To Visit</h2>
            <div className='mt-2'>
                {trip.tripData?.itinerary.map((item, index) => (
                    <div key={index} className='mb-5'>
                        <h2 className='font-medium text-xl'>{item.day}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {item.activities.map((place, index) => (
                                <div className=''>
                                    <PlaceCardItem place={place} />
                                </div>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlacesToVisit