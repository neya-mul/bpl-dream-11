import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/banner'
import Navbar from './Components/Navbar'
import Players from './Components/Players'

const allPlayers = fetch('/data.json')
    .then(res => res.json())

function App() {
    const [coinValue, setCoinValue] = useState(500000)


    return (
        <>
            {/* <h1>neyamul</h1> */}
            <Navbar coinValue={coinValue}></Navbar>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Players allPlayers={allPlayers} setCoinValue = {setCoinValue} coinValue = {coinValue}>

                </Players>
            </Suspense>
        </>
    )
}

export default App