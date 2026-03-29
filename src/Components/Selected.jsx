import ShowSelectedPlayer from "./ShowSelectedPlayer";

// working on it
export default function Selected({ selectedPlayer, setSelectedPlayer }) {
    console.log(selectedPlayer)
    return (

        <div className="">
            {
                selectedPlayer.map(selectedPlayer=> <ShowSelectedPlayer selectedPlayer={selectedPlayer}></ShowSelectedPlayer>)

            }
        </div>

    );
}