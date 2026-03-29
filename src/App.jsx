import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/banner'
import Navbar from './Components/Navbar'
import Players from './Components/Players'
import Newslatter from './Components/Newslatter'

const allPlayers = fetch('/data.json')
    .then(res => res.json())

function App() {
    const [coinValue, setCoinValue] = useState(500000)


    return (
        <>
            {/* <h1>neyamul</h1> */}
            <Navbar coinValue={coinValue}></Navbar>
            <Banner></Banner>
            <Suspense
                fallback={
                    <div className="flex justify-center items-center min-h-screen">
                        <span className="loading loading-spinner loading-xl"></span>
                    </div>
                }
            >
                <Players
                    allPlayers={allPlayers}
                    setCoinValue={setCoinValue}
                    coinValue={coinValue}
                />
            </Suspense>
            <Newslatter></Newslatter>
        </>
    )
}

export default App