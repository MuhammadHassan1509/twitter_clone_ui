const SideBar = () => {
    return (
        <>
            <div className="sidebar flex md:items-end flex-col sticky top-0">
                <ul className="flex flex-col text-xl md:px-11 font-bold w-full">
                    <li>
                        <div className="logo invert my-4 self-start mx-20">
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-8 m-auto r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
                >
                    <g>
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        ></path>
                    </g>
                </svg>
            </div>
                    </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 pb-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">search</span> <span className="hidden md:block"> Explore </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4  hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">home</span> <span className="hidden md:block"> Home </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">notifications</span> <span className="hidden md:block"> Notifications </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">chat</span> <span className="hidden md:block"> Grok </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">lists</span> <span className="hidden md:block"> Lists </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">bookmarks</span> <span className="hidden md:block"> Bookmarks </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">communities</span> <span className="hidden md:block"> Communities </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">crown</span> <span className="hidden md:block"> Premium </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">person</span> <span className="hidden md:block"> Profile </span> </li>
                    <li className="flex md:justify-start items-center md:ml-25 gap-3 justify-center md:w-fit hover:bg-gray-900 px-5 py-4 hover:cursor-pointer hover:rounded-full"><span class="material-symbols-outlined text-3xl">more</span> <span className="hidden md:block"> More </span> </li>
                    <li className="flex md:justify-start md:ml-25 justify-center items-center md:w-fit">
                        <div className="button w-full text-center my-3">
                            <button className="bg-white text-black text-lg rounded-full px-3 md:px-25 md:py-3">Post</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar