import BgVideoBox from "./BgVideoBox"

const VideoComponent = () => {
    return (
        <div className=' w-[100%]  mx-auto relative  overflow-auto'>
            <video className='w-full' loop muted autoPlay>
                <source src='https://hitch-video.s3.us-east-2.amazonaws.com/video.mp4' />
            </video>
            <BgVideoBox />
        </div>
    )
}

export default VideoComponent