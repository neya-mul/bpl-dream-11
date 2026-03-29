import NoPlayer from "./NoPlayer";
import ShowSelectedPlayer from "./ShowSelectedPlayer";

// working on it
export default function Selected({ selectedPlayer, setSelectedPlayer, coinValue, setCoinValue }) {
    // console.log(selectedPlayer)
    return (

        <div className="space-y-4 mb-6 md:mb-0">
            {selectedPlayer.length === 0 ? <NoPlayer></NoPlayer> :
                selectedPlayer.map(player => <ShowSelectedPlayer player={player} key={player.name} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coinValue={coinValue} setCoinValue={setCoinValue}></ShowSelectedPlayer>)

            }
        </div>

    );
}