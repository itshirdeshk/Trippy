import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        trip && GetPlacePhoto();
    }, [trip]);

    const GetPlacePhoto = () => {
        const data = {
            textQuery: trip?.userSelection?.location?.label
        }
        GetPlaceDetails(data).then((res) => {
            const photo_url = PHOTO_REF_URL.replace('{NAME}', res.data.places[0].photos[3].name)
            setPhotoUrl(photo_url)
        })
            .catch((err) => {
                throw err
            })
    }
    return (
        <Link to={'/view-trip/' + trip?.id}>
            <div className='hover:scale-105 transition-all'>
                <img src={photoUrl} className='object-cover rounded-xl h-[220px]' />
                <div className='mt-3'>
                    <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
                    <h2 className='text-sm text-gray-500 mt-1'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
                </div>

            </div>
        </Link>
    )
}

export default UserTripCardItem