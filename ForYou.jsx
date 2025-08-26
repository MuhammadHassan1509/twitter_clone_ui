const ForYou = () => {
    return (
        <>
            <div className="top flex p-3 relative">
                <div className="absolute w-14 rounded-full h-1 bg-blue-400 bottom-0 left-[19%]"></div>
                <div className="left w-1/2 flex justify-center text-lg font-bold">For You</div>
                <div className="right w-1/2 flex justify-center text-lg font-bold">Following</div>
                <div className="settings mx-2"><span class="material-symbols-outlined">
                    settings
                </span></div>
            </div>
        </>
    )
}

export default ForYou