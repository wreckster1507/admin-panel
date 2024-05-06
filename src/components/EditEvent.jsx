
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditEvent = () => {
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
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://project-club-fuisson.onrender.com/events/${id}`)
            .then((response) => {
                console.log(response.data);
                setEventName(response.data.eventName);
                setEventDescription(response.data.eventDescription);
                setEventDate(response.data.eventDate);
                setEventYear(response.data.eventYear);
                setEventVenue(response.data.eventVenue);
                setHostedBy(response.data.hostedBy);
                setLastDate(response.data.lastDate);
                setStatus(response.data.status);
                setPrice(response.data.price);
            }).catch((error) => {
                alert('An error happened. Please Check console');
                console.log(error);
            });
    }, [])

    const handleEditEvent = () => {
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
            .put(`https://project-club-fuisson.onrender.com/events${id}`, data)
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
            <h1 className='text-3xl my-4'>Edit</h1>
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
                    <textarea
                        type='text'
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>EventYear</label>
                    <textarea
                        type='number'
                        value={eventYear}
                        onChange={(e) => setEventYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>EventVenue</label>
                    <textarea
                        type='string'
                        value={eventVenue}
                        onChange={(e) => setEventVenue(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>HostedBy</label>
                    <textarea
                        type='text'
                        value={hostedBy}
                        onChange={(e) => setHostedBy(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Last Date</label>
                    <textarea
                        type='text'
                        value={lastDate}
                        onChange={(e) => setLastDate(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Status</label>
                    <textarea
                        type='number'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                    <textarea
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='p-2 bg-sky-300 m-8' onClick={handleEditEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditEvent;