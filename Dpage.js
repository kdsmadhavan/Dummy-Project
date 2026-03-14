import Navbar from "../../components/Navbar"

export default function Dashboard(){

  return(

    <div className="bg-black text-white min-h-screen">

      <Navbar/>

      <div className="p-16">

        <h1 className="text-3xl mb-6">User Dashboard</h1>

        <p className="text-gray-400">
          Track builds, achievements, and progress.
        </p>

      </div>

    </div>

  )
}
