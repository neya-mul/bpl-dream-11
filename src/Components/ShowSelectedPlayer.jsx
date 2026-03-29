import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function ShowSelectedPlayer({selectedPlayer}) {
  return (
    <div className='flex justify-between border border-gray-300 items-center p-4 rounded-2xl'> 

        <div className='flex items-center gap-4'>
            <img src={selectedPlayer.image} alt=""  className='h-20 w-fit rounded-xl'/>
            <div>
                <h1 className='text-xl font-bold'>{selectedPlayer.name}</h1>
                <p>{selectedPlayer.battingStyle}</p>
            </div>
        </div>

        <button className='btn text-red-400'> <MdDelete /></button>



    </div>
  )
}
