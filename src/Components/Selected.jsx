import ShowSelectedPlayer from "./ShowSelectedPlayer";

// working on it
export default function Selected({ selectedPlayer, setSelectedPlayer }) {
    // console.log(selectedPlayer)
    return (

        <div className="space-y-4">
            {
                selectedPlayer.map(player=> <ShowSelectedPlayer player={player} key={player.name} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></ShowSelectedPlayer>)

            }
        </div>

    );
}