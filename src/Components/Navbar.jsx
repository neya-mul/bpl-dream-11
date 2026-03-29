import logo from "../images/logo.png"
import coin from "../images/Icon.png"
export default function Navbar({ coinValue }) {
    // console.log(coinValue)
    return (
        <div>
            <div className="container mx-auto items-center space-y-3 md:flex justify-between p-3">
                <div className="img ">
                    <img src={logo} alt="" className="mx-auto" />

                </div>

                <div className="flex flex-wrap gap-3">
                    <ul className="flex flex-w gap-3.5 items-center md:mx-auto max-w-[500px] text-center mx-auto">
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>

                    </ul>

                </div>

                <div>
                    <span className="flex btn max-w-50 mx-auto">
                        {coinValue} coins
                        <img src={coin} alt="" />

                    </span>
                </div>
            </div>
        </div>
    )
}