const WhatsHappening = () => {
    return (
        <>
            <div className="whatshapp flex gap-4">
                <div className="img mt-7 ml-4 w-12">
                    <img src="https://pbs.twimg.com/profile_images/1958997365756510208/lx6B-Kfw_bigger.jpg" className="rounded-full" alt="" />
                </div>
                <div className="w-full">
                    <input type="text" className="w-full h-7 my-9 outline-none text-xl bg-black text-white" placeholder="What's happening?" />
                    <div className="blueicons flex gap-4 text-blue-400 mb-3">
                        <span className="material-symbols-outlined cursor-pointer">
                            add_photo_alternate
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            gif_box
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            checklist
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            sentiment_satisfied
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            calendar_clock
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            location_on
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatsHappening