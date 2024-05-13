import BgVideoBox from "./BgVideoBox"

const VideoComponent = () => {
    return (
        <div className=' w-[100%]  mx-auto relative  overflow-auto'>
            <video className='w-full' loop muted autoPlay>
                <source src='/video.mp4' />
            </video>
            <BgVideoBox />
        </div>
    )
}

export default VideoComponent