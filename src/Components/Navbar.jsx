import logo from "../images/logo.png"
import coin from "../images/Icon.png"
export default function Navbar({coinValue}) {
    // console.log(coinValue)
    return (
        <div>
            <div className="container mx-auto items-center md:flex justify-between p-3">
                <div className="img ">
                    <img src={logo} alt="" className="mx-auto" />
                </div>

                <div className="flex gap-3">
                    <ul className="flex gap-3.5 items-center md:mx-auto max-w-[500px] text-center mx-auto">
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>

                    </ul>
                    <button className="flex btn">
                        {coinValue} coins
                        <img src={coin} alt="" />

                    </button>
                </div>
            </div>
        </div>
    )
}