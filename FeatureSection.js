export default function FeatureSection() {

  const features = [
    "Interactive 3D PC Model",
    "Drag and Drop Components",
    "Step by Step Tutorials",
    "Hardware Information",
    "Progress Tracking",
    "Gamified Challenges"
  ]

  return (
    <section className="p-16 bg-black text-white">

      <h2 className="text-3xl font-bold text-center mb-10">
        Platform Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {features.map((f,i)=>(
          <div key={i} className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            {f}
          </div>
        ))}

      </div>

    </section>
  )
}
