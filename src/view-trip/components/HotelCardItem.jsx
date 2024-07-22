import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        hotel && GetPlacePhoto();
    }, [hotel]);

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: hotel?.hotelName
        }
        GetPlaceDetails(data).then((res) => {
            const photo_url = PHOTO_REF_URL.replace('{NAME}', res.data.places[0].photos[3].name)
            setPhotoUrl(photo_url)
        })
            .catch((err) => { throw err; })
    }

    return (
        <Link to={"https://www.google.com/maps/search/?api=1&query=" + hotel.hotelName + ',' + hotel?.hotelAddress} target="_blank" >
            <div className='hover:scale-105  transition-all cursor-pointer'>
                <img src={photoUrl} className='rounded-xl h-[180px] w-full object-cover ' />
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-bold'>{hotel?.hotelName}</h2>
                    <h2 className='text-sm text-gray-500'>📍 {hotel?.hotelAddress}</h2>
                    <h2 className='text-sm'>💰 {hotel?.price} per night</h2>
                    <h2 className='text-sm'>⭐ {hotel?.rating} stars</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCardItem