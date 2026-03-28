import { FaFlag } from "react-icons/fa6";

import { FaUser } from "react-icons/fa";

export default function ShowPlayer({ player }) {
    // console.log(player.name);    

    return (

        <div className="card bg-base-100 w-96 shadow-sm mx-auto grid">
            <figure>
                <img
                    className="h-[250px] w-full"
                    src={player.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> <FaUser /> {player.name}</h2>
                <div className="flex">
                    <p className="flex items-center gap-2"><FaFlag />{player.country}</p>
                    <button className="btn rounded-2xl">{player.role}</button>
                </div>
                  <div className="divider"></div>

                <div className="flex justify-between">
                    <p>{ player.battingStyle}</p>
                    <p className="text-right">{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-end items-center">
                    <p className="font-bold">Price:{player.price}</p> 
                    <button className="btn">Choose Player</button>
                </div>
            </div>
        </div>
    );
}