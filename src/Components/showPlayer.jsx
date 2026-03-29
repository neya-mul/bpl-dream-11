
import { FaFlag } from "react-icons/fa6";

import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ShowPlayer({ player, setCoinValue, coinValue, selectedPlayer, setSelectedPlayer }) {
    // console.log(player.name);    
    const playerPrice = player.price
    const newPrice = coinValue - playerPrice
    const [isSelected, setIsSelected] = useState(false)
    const handleChoosePlayer = () => {
        if (newPrice >= 0) {
            setCoinValue(coinValue - playerPrice)
        }
        else{
            // alert ('Not enough coin')
            toast.error('Not enough coin')
            return;
        }

        // alert(`${player.name} is selected`)
        toast.success(`${player.name} is selected`)
        setIsSelected(true)
        setSelectedPlayer([...selectedPlayer, player])


    }

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
                    <p>{player.battingStyle}</p>
                    <p className="text-right">{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-end items-center">
                    <p className="font-bold">Price:{player.price}</p>
                    <button onClick={() => handleChoosePlayer()} className="btn" disabled={isSelected ? true : false}>{isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
}