import logo from "../images/logo.png"
import coin from "../images/Icon.png"
export default function Navbar() {
    return (
        <div>
            <div className="container mx-auto items-center flex justify-between p-3">
                <div className="img ">
                    <img src={logo} alt="" />
                </div>

                <div>
                    <ul className="flex gap-3.5 items-center">
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                        <button className="flex btn">
                            0 coins
                            <img src={coin} alt="" />

                        </button>
                    </ul>

                </div>
            </div>
        </div>
    )
}