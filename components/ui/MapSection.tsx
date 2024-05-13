
import MapsComponent from "./MapsComponent"

const MapSection = () => {
    return (
        <section className='pt-[48px] pb-[40px]'>
            <div className="px-[40px] ">
                <div>
                    <h2 className="text-[56px] font-bold leading-[64px] text-[#121212]">Where will you go with Hitch ?</h2>
                    <h3 className="text-[56px] font-bold  text-[#B9B9B9] mb-[24px]">See our current cities</h3>
                </div>

            </div>
            <div>
                <MapsComponent />
            </div>
        </section>
    )
}

export default MapSection