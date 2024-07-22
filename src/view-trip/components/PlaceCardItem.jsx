import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6"
import { Link } from 'react-router-dom'

function PlaceCardItem({ place }) {

    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        place && GetPlacePhoto();
    }, [place]);

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: place.placeName
        }
        GetPlaceDetails(data).then((res) => {
            const photo_url = PHOTO_REF_URL.replace('{NAME}', res.data.places[0].photos[3].name)
            setPhotoUrl(photo_url)
        })
            .catch((err) => { throw err; })
    }
    return (
        <Link to={"https://www.google.com/maps/search/?api=1&query=" + place.placeName} target="_blank" >
            <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
                <img src={photoUrl}
                    className='w-[150px] h-[150px] object-cover rounded-xl'
                />
                <div>
                    <h2 className='font-bold text-lg'>{place.placeName}</h2>
                    <p className='text-sm text-gray-400 mt-2'>{place.placeDetails}</p>
                    <h2 className='mt-2 font-bold'>Ticket Price: <span className='font-medium'>{place.ticketPricing}</span></h2>
                    <h2 className='mt-2'>🕙 {place.timeToTravel}</h2>
                    {/* <Button size="sm"><FaMapLocationDot /></Button> */}
                </div>
            </div>
        </Link>
    )
}

export default PlaceCardItem