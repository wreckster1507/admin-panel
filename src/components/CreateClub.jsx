
import { useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const CreateClub = () => {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [leadMember, setLeadMember] = useState('');
    const [coLeadMember, setCoLeadMember] = useState('');

    const navigate = useNavigate();


    const handleSaveClub = () => {
        const data = {
            title,
            subTitle,
            leadMember,
            coLeadMember
        };
        axios
            .post('https://club-fusion-server.onrender.com/clubs', data)
            .then(() => {
                navigate('/clubs');
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
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>SubTitle</label>
                    <input
                        type='text'
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>LeadMember</label>
                    <input
                        type='text'
                        value={leadMember}
                        onChange={(e) => setLeadMember(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>CoLeadMember</label>
                    <input
                        type='text'
                        value={coLeadMember}
                        onChange={(e) => setCoLeadMember(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>

                <div className='flex justify-center'>
                    <button className='p-2 bg-sky-300 m-8' onClick={handleSaveClub}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateClub;