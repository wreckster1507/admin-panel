
import { useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const EventCreate = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventYear, setEventYear] = useState('');
    const [eventVenue, setEventVenue] = useState('');
    const [hostedBy, setHostedBy] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [status, setStatus] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();


    const handleSaveEvent = () => {
        const data = {
            eventName,
            eventDescription,
            eventDate,
            eventYear,
            eventVenue,
            hostedBy,
            lastDate,
            status,
            price
        };
        axios
            .post('https://club-fusion-server.onrender.com/events', data)
            .then(() => {
                navigate('/events');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <div>
                <Link to='/events'>
                    <button className='p-2 bg-sky-300'>Back</button>
                </Link>
            </div>
            <h1 className='text-3xl my-4'>Create Event</h1>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>EventName</label>
                    <input
                        type='text'
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>EventDescription</label>
                    <textarea
                        type='text'
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>EventDate</label>
                    <input
                        type='text'
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>EventYear</label>
                    <input
                        type='number'
                        value={eventYear}
                        onChange={(e) => setEventYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>EventVenue</label>
                    <input
                        type='string'
                        value={eventVenue}
                        onChange={(e) => setEventVenue(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>HostedBy</label>
                    <input
                        type='text'
                        value={hostedBy}
                        onChange={(e) => setHostedBy(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Last Date</label>
                    <input
                        type='date'
                        value={lastDate}
                        onChange={(e) => setLastDate(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Status</label>
                    <input
                        type='text'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                    <input
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='p-2 bg-sky-300 m-8' onClick={handleSaveEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventCreate;