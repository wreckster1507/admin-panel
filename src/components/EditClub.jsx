
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditClub = () => {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [leadMember, setLeadMember] = useState('');
    const [coLeadMember, setCoLeadMember] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://project-club-fuisson.onrender.com/clubs/${id}`)
            .then((response) => {
                console.log(response.data);
                setTitle(response.data.title);
                setSubTitle(response.data.subTitle);
                setLeadMember(response.data.leadMember);
                setCoLeadMember(response.data.coLeadMember);

            }).catch((error) => {
                alert('An error happened. Please Check console');
                console.log(error);
            });
    }, [])

    const handleEditEvent = () => {
        const data = {
            title,
            subTitle,
            leadMember,
            coLeadMember
        };
        axios
            .patch(`https://project-club-fuisson.onrender.com/clubs/${id}`, data)
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
            <h1 className='text-3xl my-4'>Edit Event</h1>
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
                    <textarea
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
                    <button className='p-2 bg-sky-300 m-8' onClick={handleEditEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditClub;