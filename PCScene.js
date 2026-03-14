"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function PCcase() {
  return (
    <mesh position={[0,0,0]}>
      <boxGeometry args={[3,5,2]} />
      <meshStandardMaterial color="gray"/>
    </mesh>
  )
}

function CPU() {
  return (
    <mesh position={[0,1,0]}>
      <boxGeometry args={[1,0.2,1]} />
      <meshStandardMaterial color="gold"/>
    </mesh>
  )
}

function RAM() {
  return (
    <mesh position={[1,1,0]}>
      <boxGeometry args={[0.2,1,0.2]} />
      <meshStandardMaterial color="green"/>
    </mesh>
  )
}

export default function PCScene(){

  return(

    <Canvas camera={{position:[6,6,6]}}>

      <ambientLight intensity={0.7}/>
      <directionalLight position={[5,5,5]}/>

      <PCcase/>
      <CPU/>
      <RAM/>

      <OrbitControls/>

    </Canvas>

  )
}
