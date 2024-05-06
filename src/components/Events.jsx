import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Events() {

    const [tableItems, setTableItems] = useState([]);

    useEffect(() => {
        fetch('https://project-club-fuisson.onrender.com/events')
            .then(response => response.json())
            .then(data => {
                setTableItems(data);
                console.log(data);
                console.log("hi");


            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="flex justify-end">
                <Link to="/create-event">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Create Event</button>
                </Link>
            </div>
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Event List
                </h3>

            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">EventName</th>
                            <th className="py-3 px-6">EvenDescription</th>
                            <th className="py-3 px-6">eventDate</th>
                            <th className="py-3 px-6">eventYear</th>
                            <th className="py-3 px-6">eventVenue</th>
                            <th className="py-3 px-6">hostedBy</th>
                            <th className="py-3 px-6">lastDate</th>
                            <th className="py-3 px-6">status</th>
                            <th className="py-3 px-6">price</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.eventName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.eventDescription}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.eventDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.eventYear}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.eventVenue}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.hostedBy}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.lastDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap ">{String(item.status)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                                            <Link to={`/edit-event/${item._id}`}>Edit</Link>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                                            <Link to={`/delete-event/${item._id}`}>Delete</Link>
                                        </button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Events;