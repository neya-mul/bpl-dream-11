import banner from "../images/bg-shadow.png"
import bannerLogo from "../images/banner-main.png"

export default function Banner() {
    return (
        <div className="container mx-auto border border-red-600 bg-cover md:min-h-[550px] mt-5 bg-black rounded-2xl  bg-no-repeat w-full text-center py-7 space-y-7"
            style={{ backgroundImage: `url(${banner})` }}>
            <img src={bannerLogo} alt="" className="mx-auto max-w-[500px]sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"/>
            <h1 className="text-white text-4xl ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-gray-500 text-2xl">Beyond Boundaries Beyond Limits</p>
            <button className="bg-[#E7FE29] p-2 rounded-2xl btn">Claim Free Credit</button>
        </div>
    )
}
