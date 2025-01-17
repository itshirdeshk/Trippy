import React from 'react'
import HotelCardItem from './HotelCardItem'

function Hotels({ trip }) {
    return (
        <div>
            <h2 className='text-xl font-bold mt-5'>Hotel Recommendation</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 mt-5'>
                {trip?.tripData?.hotelOptions?.map((hotel, index) => (
                    <HotelCardItem hotel={hotel} key={index} />
                ))}
            </div>
        </div >
    )
}

export default Hotels