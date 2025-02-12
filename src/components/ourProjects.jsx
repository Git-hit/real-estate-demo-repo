export default function OurProjects() {
    const videos = [
        {
            link: 'https://optushousing.com/wp-content/uploads/2024/09/DLF-1-50_19-Reel.mp4',
            placeName: 'Gurgaon',
            buildingName: 'DLF Phase 1 Builder Floor',
        },
        {
            link: 'https://optushousing.com/wp-content/uploads/2024/09/Suncity-B74-Reel.mp4',
            placeName: 'Gurgaon',
            buildingName: 'Suncity Builder Floor',
        },
        {
            link: 'https://optushousing.com/wp-content/uploads/2024/09/Hibiscus-4510-SD.mp4',
            placeName: 'Gurgaon',
            buildingName: 'Hibiscus Lane',
        },
    ]
    return (
        <div id="our-projects" className="font-optus text-gray-800">
            <div className="my-36 flex justify-center">
                <div className="lg:w-1/2">
                    <h2 className="text-5xl lg:text-6xl text-center"><span className="font-bold">Be the first</span> to discover the hottest launches</h2>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-7 p-7 justify-center">
                {videos.map((video, i) => (
                    <div key={i} className="flex flex-col gap-3">
                        <video autoPlay playsInline muted loop className="w-full" src={video.link}></video>
                        <h2 className="font-semibold text-2xl">{video.buildingName}</h2>
                        <h2 className="font-medium text-lg text-gray-600">{video.placeName}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}