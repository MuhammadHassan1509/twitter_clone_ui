const Trending = () => {
    return (
        <>
            <div className="Whats m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-3">
                <h1 className="text-xl font-bold px-3">Whats Happening</h1>

                <div className="item p-3 hover:bg-gray-800 cursor-pointer">
                    <div className="text-sm text-gray-400">Trending in Pakistan</div>
                    <div className="font-bold">#Hassan</div>
                    <div className="text-sm text-gray-400">40.2k Posts</div>

                </div> <div className="item p-3 hover:bg-gray-800 cursor-pointer">
                    <div className="text-sm text-gray-400">Trending in Pakistan</div>
                    <div className="font-bold">#Twitter</div>
                    <div className="text-sm text-gray-400">40.2k Posts</div>

                </div> <div className="item p-3 hover:bg-gray-800 cursor-pointer">
                    <div className="text-sm text-gray-400">Trending in Pakistan</div>
                    <div className="font-bold">#Flood</div>
                    <div className="text-sm text-gray-400">40.2k Posts</div>
                </div>

            </div>
        </>
    )
}

export default Trending