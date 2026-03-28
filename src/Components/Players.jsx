import { use, useState } from "react"
import ShowPlayer from "./showPlayer"
import { hydrateRoot } from "react-dom/client"
import Selected from "./Selected"


export default function Players({ allPlayers , setCoinValue, coinValue}) {
    const players = use(allPlayers)
    const [isSelected, setIsSelected] = useState('available')
    // console.log(isSelected)
    // console.log(players);



    return (
        <div className="mx-auto container">

            <div className=" mx-auto container my-8 flex justify-between">
                <div>
                 { isSelected === 'available' ?  <h1 className="text-2xl font-bold">Available Players</h1> : <h1 className="text-2xl font-bold">Selected Player (4/6)</h1>}
                </div>
                <div className="flex">
                    <button onClick={() => setIsSelected('available')} className={` ${isSelected === 'available' ? 'bg-[#E7FE29]' : 'bg-white'}  p-3 rounded-l-2xl btn w-[130px]`}> Available</button>
                    <button onClick={() => setIsSelected('selected')} className={`${isSelected === 'selected' ? 'bg-[#E7FE29]' : 'bg-white'} p-3 rounded-r-2xl btn w-[130px]`}> Selected (0)</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                  isSelected === 'available' ?  players.map(player => <ShowPlayer player={player} setCoinValue={setCoinValue} coinValue = {coinValue}></ShowPlayer>) : <Selected></Selected>
                }
            </div>



        </div>
    )
}
