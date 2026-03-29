import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function ShowSelectedPlayer({player, selectedPlayer, setSelectedPlayer}) {
  const deleteBtn =(player)=>{
    let filteredPlayer = selectedPlayer.filter(p=> p.name !== player.name)
    console.log(filteredPlayer);
    setSelectedPlayer(filteredPlayer)
    

  }
  return (
    <div className='flex justify-between border border-gray-300 items-center p-4 rounded-2xl'> 

        <div className='flex items-center gap-4'>
            <img src={player.image} alt=""  className='h-20 w-fit rounded-xl'/>
            <div>
                <h1 className='text-xl font-bold'>{player.name}</h1>
                <p>{player.battingStyle}</p>
            </div>
        </div>

        <button className='btn text-red-400' onClick={()=> deleteBtn(player)}> <MdDelete /></button>



    </div>
  )
}
