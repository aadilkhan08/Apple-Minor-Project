import { Canvas } from '@react-three/fiber'
import React, { useRef, useEffect } from 'react'
import './style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  const orbitControlsRef = useRef() // Ref for OrbitControls

  useEffect(() => {
    if (orbitControlsRef.current) {
      // Set the target to the center of the screen (the center of the object)
      orbitControlsRef.current.target.set(0, 0, 0)
      orbitControlsRef.current.update() // Update controls after setting the target
    }
  }, [])

  return (
    <div className='w-full h-screen'>
      <div className='navbar line flex gap-10 pt-6 absolute top-0 left-1/2 -translate-x-1/2'>
        {[
          'iPhone',
          'iPad',
          'Macbook',
          'iMac',
          'Mac',
          'Services',
          'Accessories',
          'Support'
        ].map(e => (
          <a href='#' className='text-white font-[400] text-sm capitalize'>
            {e}
          </a>
        ))}
      </div>

      <div className="absolute flex flex-col item-center text-white top-[10%] left-[19.5%] translate-x-[50%] font-['SF PRO DISPLAY']">
        <h3 className='masked text-7xl tracking-tighter font-[700]'>
          Macbook Pro.
        </h3>
      </div>

      <Canvas
        camera={{ fov: 12, position: [0, 0, 220] }} // Make sure the camera is positioned properly
        style={{ width: '100%', height: '100%' }}
      >
        <Environment
          files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'
          ]}
        />
        <ScrollControls pages={3}>
          {/* OrbitControls with ref */}
          <OrbitControls
            ref={orbitControlsRef}
            enableZoom={false}
            enablePan={false} // Disable panning so the object stays centered
            target={[0, 0, 0]} // Make sure the target is the center
          />
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
