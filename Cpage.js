import Navbar from "../../components/Navbar"

export default function Challenges(){

  return(

    <div className="bg-black text-white min-h-screen">

      <Navbar/>

      <div className="p-16">

        <h1 className="text-3xl mb-10">PC Build Challenges</h1>

        <ul className="space-y-4">

          <li>Build a Gaming PC</li>
          <li>Build under $800</li>
          <li>Speed Build Challenge</li>
          <li>Silent PC Build</li>

        </ul>

      </div>

    </div>

  )
}
