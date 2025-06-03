import React, { useEffect, useState } from 'react'

function TrafficLightSimulator() {
    let lights = ['red','green','yellow']
    let i=-1
    let [light,setLight] = useState(lights[0])
    

    useEffect(()=>{
        setInterval(()=>{
             i++
             
            setLight(lights[i])

            if(i==2){
                i=-1
             }
            
        },3000)
    })
  return (
    <div>Traffic Light Simulator
    <div className='h-full flex justify-center items-center'>
      <div className='bg-gray-400 flex flex-col w-64 h-[80%] justify-center items-center '>
        <div className={light=='red' ? 'bg-red-500 border rounded-[50%] w-24 h-24 m-5' : 'bg-gray-400 border rounded-[50%] w-24 h-24 m-5'} ></div>
        <div className={light=='yellow' ? 'bg-yellow-500 border rounded-[50%] w-24 h-24 m-5' : 'bg-gray-400 border rounded-[50%] w-24 h-24 m-5'}></div>
        <div className={light=='green' ? 'bg-green-500 border rounded-[50%] w-24 h-24 m-5' : 'bg-gray-400 border rounded-[50%] w-24 h-24 m-5'}></div>
      </div>
    </div>
    </div>
  )
}

export default TrafficLightSimulator
