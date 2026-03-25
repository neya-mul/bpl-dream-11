import { Suspense } from 'react'
import './App.css'
import Banner from './Components/banner'
import Navbar from './Components/Navbar'
import Players from './Components/Players'

const allPlayers = fetch('/data.json')
    .then(res => res.json())

function App() {


    return (
        <>
            {/* <h1>neyamul</h1> */}
            <Navbar></Navbar>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Players allPlayers={allPlayers}>

                </Players>
            </Suspense>
        </>
    )
}

export default App