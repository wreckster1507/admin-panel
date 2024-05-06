import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Club() {

    const [tableItems, setTableItems] = useState([]);

    useEffect(() => {
        fetch('https://project-club-fuisson.onrender.com/clubs')
            .then(response => response.json())
            .then(data => {
                setTableItems(data);
                console.log(data);


            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="flex justify-end">
                <Link to="/create-club">
                    <button className=" bg-indigo-600 text-white px-4 py-2 rounded-lg">Create Club</button>
                </Link>
            </div>
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Team members
                </h3>

            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Title</th>
                            <th className="py-3 px-6">SubTitle</th>
                            <th className="py-3 px-6">LeadMember</th>
                            <th className="py-3 px-6">coLeadMember</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.subTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.leadMember}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.coLeadMember}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link to={`/edit-club/${item._id}`}>
                                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Edit</button>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link to={`/delete-club/${item._id}`}>
                                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Delete</button>
                                        </Link>
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

export default Club;