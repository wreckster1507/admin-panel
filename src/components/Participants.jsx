import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Participants() {

    const [tableItems, setTableItems] = useState([]);

    useEffect(() => {
        fetch('https://project-club-fuisson.onrender.com/participants')
            .then(response => response.json())
            .then(data => {
                setTableItems(data);
                console.log(data);

            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Participants
                </h3>

            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">rollNumber</th>
                            <th className="py-3 px-6">phonenumber</th>
                            <th className="py-3 px-6">price</th>
                            <th className="py-3 px-6">event</th>
                            <th className="py-3 px-6">orderId</th>
                            <th className="py-3 px-6">paymentId</th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6">qrCode</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.rollNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.phoneNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.event}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.orderId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.paymentId}</td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link to={`/delete-participant/${item._id}`}>
                                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                                                Delete
                                            </button>
                                        </Link>
                                    </td>

                                    {/* <td className="px-6 py-4 whitespace-nowrap">{item.qrCode}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Participants;