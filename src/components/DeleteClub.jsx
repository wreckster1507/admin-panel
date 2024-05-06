import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteClub = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteClub = () => {
        axios
            .delete(`https://project-club-fuisson.onrender.com/clubs/${id}`)
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
                <button className='p-2 bg-sky-300' onClick={() => navigate('/clubs')}>
                    Back
                </button>
            </div>
            <h1 className='text-3xl my-4'>Delete Club</h1>
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are You Sure You want to delete this Club?</h3>

                <button
                    className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteClub}
                >
                    Yes, Delete it
                </button>
            </div>
        </div>
    )
}

export default DeleteClub;
