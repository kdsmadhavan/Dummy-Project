import Navbar from "../../components/Navbar"

export default function Learn(){

  return(

    <div className="bg-black text-white min-h-screen">

      <Navbar/>

      <div className="p-16">

        <h1 className="text-3xl mb-6">PC Hardware Basics</h1>

        <ul className="space-y-4 text-gray-400">

          <li>CPU – Brain of the computer</li>
          <li>GPU – Handles graphics</li>
          <li>RAM – Temporary memory</li>
          <li>Motherboard – Connects all parts</li>

        </ul>

      </div>

    </div>

  )
}
