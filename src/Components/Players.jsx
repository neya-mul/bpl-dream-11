import { use } from "react"


export default function Players({allPlayers}) {
    const players = use(allPlayers)
    console.log(players);
    
    
  return (
    <div className="mx-auto container my-8 flex justify-between">
        <div>
            <h1>Available Players</h1>
        </div>
        <div>
            <button className=""> Available</button>
            <button> Selected (0)</button>

        </div>

    </div>
  )
}
