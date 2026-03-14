"use client"

import Navbar from "../../components/Navbar"
import PCScene from "../../components/PCScene"
import ComponentLibrary from "../../components/ComponentLibrary"
import InfoPanel from "../../components/InfoPanel"
import ProgressBar from "../../components/ProgressBar"

export default function Simulator(){

  return(

    <div className="h-screen flex flex-col bg-black">

      <Navbar/>

      <div className="flex flex-1">

        <ComponentLibrary/>

        <div className="flex-1">
          <PCScene/>
        </div>

        <InfoPanel/>

      </div>

      <ProgressBar/>

    </div>

  )
}
