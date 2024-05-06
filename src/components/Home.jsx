
function Home() {




    return (
        <>

            <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Welcome to our
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Admin Dashboard
                        </h2>
                        <p>
                            Add, update, delete and view the participants, events and clubs.
                        </p>

                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="https://as1.ftcdn.net/v2/jpg/03/39/49/06/1000_F_339490615_3Ci1b1tiQ3I6I0QJJj5CxmfvYCgpgS9a.jpg"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home