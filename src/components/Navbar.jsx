import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [state, setState] = useState(false)


    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Participants", path: "/Participants" },
        { title: "Events", path: "/Events" },
        { title: "Clubs", path: "/Clubs" },

    ]

    return (
        <nav className="bg-white w-full border-b md:border-0 md:static ">
            <div className="items-center px-4 max-w-screen-xl mx-auto my-10 md:flex md:px-8">
                <div>
                    <Link to="/">
                        <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
                    </Link>
                </div>

                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>



            </div>
        </nav>
    )
}