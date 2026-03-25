import banner from "../images/bg-shadow.png"

export default function Banner() {
    return (
        <div className="container mx-auto min-h-[60vh]  bg-no-repeat w-full"
            style={{ backgroundImage: `url(${banner})` }}>
            <h1>Ne</h1>
        </div>
    )
}
