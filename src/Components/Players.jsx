import { use } from "react"
import ShowPlayer from "./showPlayer"


export default function Players({ allPlayers }) {
    const players = use(allPlayers)
    // console.log(players);



    return (
        <div className="mx-auto container">

            <div className=" mx-auto container my-8 flex justify-between">
                <div>
                    <h1>Available Players</h1>
                </div>
                <div className="flex">
                    <button className="bg-[#E7FE29] p-3 rounded-l-2xl"> Available</button>
                    <button className="p-3 rounded-r-2xl"> Selected (0)</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    players.map(player => <ShowPlayer player={player}></ShowPlayer>)
                }
            </div>



        </div>
    )
}
