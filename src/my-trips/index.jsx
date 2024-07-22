import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';
import { Button } from '@/components/ui/button';

function MyTrips() {
    const navigate = useNavigate();
    const [userTrips, setUserTrips] = useState([])
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        GetUserTrips();
    }, [flag])

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/');
            return;
        }

        const q = query(collection(db, 'AiTrips'), where('userEmail', '==', user?.email))
        const querySnapshot = await getDocs(q);
        setUserTrips([]);
        querySnapshot.forEach((doc) => {
            setUserTrips(prev => [...prev, doc.data()]);
        })
        setFlag(false);
    }
    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>

            {userTrips.length > 0 ? <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
                {userTrips.length > 0 ? userTrips.map((trip, index) => (
                    <UserTripCardItem trip={trip} key={index} />
                )) : [1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>

                    </div>
                ))}
            </div> : <div>
                <h2 className='text-3xl mt-10 mb-4'>No trips created yet...</h2>
                <Button className="text-lg" onClick={() => navigate('/create-trip')}>Create Trip</Button>
            </div>}
        </div>
    )
}

export default MyTrips