import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { model } from '@/service/AiModel';
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { toast } from 'sonner';
import { FcGoogle } from "react-icons/fc"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { db } from '@/service/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function CreateTrip() {
    const [place, setPlace] = useState();
    const [openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleInputChanege = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const login = useGoogleLogin({
        onSuccess: (codeRes) => getUserProfile(codeRes),
        onError: (err) => { throw err; }
    })

    const onGenerateTrip = async () => {

        const user = localStorage.getItem('user');

        if (!user) {
            setOpenDialog(true);
            return;
        }

        if (formData?.noOfDays > 5 && !formData.budget || !formData.location || !formData.traveler) {
            toast("Please fill all the details...");
            return;
        }

        setLoading(true);

        const FINAL_PROMPT = AI_PROMPT.replace('{location}', formData?.location?.label)
            .replace("{totalDays}", formData?.noOfDays).replace('{traveler}', formData?.traveler)
            .replace('{budget}', formData?.budget).replace("{totalDays}", formData?.noOfDays)

        const result = await model.generateContent(FINAL_PROMPT);
        setLoading(false);
        saveAiTrip(result?.response?.text())

    }

    const saveAiTrip = async (tripData) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const docId = Date.now().toString();
        await setDoc(doc(db, "AiTrips", docId), {
            userSelection: formData,
            tripData: JSON.parse(tripData),
            userEmail: user?.email,
            id: docId
        })
        setLoading(false);
        navigate('/view-trip/' + docId);
    }

    const getUserProfile = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo.access_token}`,
                Accept: 'Application/json'
            }
        }).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data))
            setOpenDialog(false);
            onGenerateTrip();
        })
    }

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>
                Tell us your travel preferences 🏕
            </h2>
            <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate customized itinerary based on your preferences.</p>

            <div className='mt-20 flex flex-col gap-10'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
                    <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} selectProps={{
                        place, onChange: (v) => { handleInputChanege('location', v) }
                    }} />
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>How many days are you planning for your trip?</h2>
                    <Input placeholder={'Ex. 3'} type="number" onChange={(e) => { handleInputChanege('noOfDays', e.target.value) }} />
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {SelectBudgetOptions.map((item, index) => (
                            <div key={index}
                                onClick={() => handleInputChanege('budget', item.title)}
                                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.budget == item.title && 'shadow-lg border-black'}`}>
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>Who do you plan travelling with on your next adventure?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {SelectTravelesList.map((item, index) => (
                            <div key={index}
                                onClick={() => handleInputChanege('traveler', item.people)}
                                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.traveler == item.people && 'shadow-lg border-black'}`}>
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <div className='my-10 flex justify-end'>
                <Button
                    disabled={loading}
                    onClick={onGenerateTrip}>
                    {loading ? <AiOutlineLoading3Quarters className='w-7 h-7 animate-spin' /> :
                        "Generate Trip"}</Button>
            </div>

            <Dialog open={openDialog} >
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription>
                            <img src='https://res.cloudinary.com/itshirdeshk/image/upload/v1721556572/logo_ve1caz.svg' />
                            <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
                            <p>Sign in to the App with Google Authentication Securly.</p>
                            <Button
                                onClick={login}
                                className='w-full mt-5 font-bold flex gap-4 items-center'>

                                <FcGoogle className='h-7 w-7' />
                                Sign in with Google

                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default CreateTrip