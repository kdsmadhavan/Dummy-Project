export default function ComponentLibrary(){

  const parts = [
    "CPU",
    "GPU",
    "RAM",
    "Motherboard",
    "SSD",
    "HDD",
    "PSU",
    "Cooling Fan",
    "Radiator"
  ]

  return(

    <div className="w-64 bg-gray-900 text-white p-4">

      <h2 className="text-lg mb-4">Components</h2>

      {parts.map((p,i)=>(
        <div
        key={i}
        className="p-2 mb-2 bg-gray-800 rounded cursor-pointer hover:bg-cyan-600"
        >
        {p}
        </div>
      ))}

    </div>

  )
}
