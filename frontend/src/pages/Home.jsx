import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import axios from 'axios';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
// import VehiclePanel from '../components/VehiclePanel';
// import ConfirmRide from '../components/ConfirmRide';
// import LookingForDriver from '../components/LookingForDriver';
// import WaitingForDriver from '../components/WaitingForDriver';
// import { SocketContext } from '../context/SocketContext';
import { useContext } from 'react';
// import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LocationSearchPanel from '../components/LocationSearchPanel';
// import LiveTracking from '../components/LiveTracking';

const Home = () => {
    const [pick, setpick] = useState('')
    const [destination, setfirst]=useState(second)
    const [ panelOpen, setPanelOpen ] = useState(false)
    const [ vehiclePanel, setVehiclePanel ] = useState(false)
    const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
    
    
    const vehiclePanelRef = useRef(null)
     const confirmRidePanelRef = useRef(null)
     const vehicleFoundRef = useRef(null)
    // const waitingForDriverRef = useRef(null)
     const panelRef = useRef(null)
     const panelCloseRef = useRef(null)
     
    
    // const [ vehicleFound, setVehicleFound ] = useState(false)
    // const [ waitingForDriver, setWaitingForDriver ] = useState(false)
    // const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    // const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    // const [ activeField, setActiveField ] = useState(null)
    // const [ fare, setFare ] = useState({})
    // const [ vehicleType, setVehicleType ] = useState(null)
    // const [ ride, setRide ] = useState(null)

    // const navigate = useNavigate()

    // const { socket } = useContext(SocketContext)
    // const { user } = useContext(UserDataContext)

    // useEffect(() => {
    //     socket.emit("join", { userType: "user", userId: user._id })
    // }, [ user ])

    // socket.on('ride-confirmed', ride => {


    //     setVehicleFound(false)
    //     setWaitingForDriver(true)
    //     setRide(ride)
    // })

    // socket.on('ride-started', ride => {
    //     console.log("ride")
    //     setWaitingForDriver(false)
    //     navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
    // })


    // const handlePickupChange = async (e) => {
    //     setPickup(e.target.value)
    //     try {
    //         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
    //             params: { input: e.target.value },
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`
    //             }

    //         })
    //         setPickupSuggestions(response.data)
    //     } catch {
    //         // handle error
    //     }
    // }

    // const handleDestinationChange = async (e) => {
    //     setDestination(e.target.value)
    //     try {
    //         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
    //             params: { input: e.target.value },
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`
    //             }
    //         })
    //         setDestinationSuggestions(response.data)
    //     } catch {
    //         // handle error
    //     }
    // }

    const submitHandler = (e) => {
        e.preventDefault()
    }

     useGSAP(function () {
         if (panelOpen) {
             gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                //opacity: 1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
         } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                //opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
         }
     }, [ panelOpen ])


    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePanel ])

    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePanel ])

    // useGSAP(function () {
    //     if (vehicleFound) {
    //         gsap.to(vehicleFoundRef.current, {
    //             transform: 'translateY(0)'
    //         })
    //     } else {
    //         gsap.to(vehicleFoundRef.current, {
    //             transform: 'translateY(100%)'
    //         })
    //     }
    // }, [ vehicleFound ])

    // useGSAP(function () {
    //     if (waitingForDriver) {
    //         gsap.to(waitingForDriverRef.current, {
    //             transform: 'translateY(0)'
    //         })
    //     } else {
    //         gsap.to(waitingForDriverRef.current, {
    //             transform: 'translateY(100%)'
    //         })
    //     }
    // }, [ waitingForDriver ])


    // async function findTrip() {
    //     setVehiclePanel(true)
    //     setPanelOpen(false)

    //     const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
    //         params: { pickup, destination },
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })


    //     setFare(response.data)


    // }

    // async function createRide() {
    //     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
    //         pickup,
    //         destination,
    //         vehicleType
    //     }, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })


    // }

    return (
     
      <div className='h-screen relative overflow-hidden'>
        <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <div className='h-screen w-screen'> 
          {/* {image for temporary use} */}
          
          <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />
        </div>

        <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
          
          <div className='h-[30%] p-6 bg-white relative'>
            <h5 ref={panelCloseRef} onClick={()=>{
              setPanelOpen(false)
            }} className='absolute opacity-0 right-6 top-6 text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            < input 
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{
               setPickup(e.target.value)
            }}
            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
            type="text" 
            placeholder='Add a pick-up location' />
            <input
            onClick={()=>{
              setPanelOpen(true)
            }} 
            value={destination}
            onChange={(e)=>{
               setDestination(e.target.value)
            }}
            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
            type="text" 
            placeholder='Enter your destination' />
          </form>
          </div>
          
         
          <div ref={panelRef} className=' bg-white  h-0'>
                      <LocationSearchPanel />

          </div>
        </div>
        <div className='fixed w-full z-10 bottom-0 bg-white px-3 py-6'>
          <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
          <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
              <img className='h-12' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngplay.com%2Fimage%2F166455&psig=AOvVaw10vyVYxhllBA5Mq29iJ-Mk&ust=1752265070897000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMC7uZqOs44DFQAAAAAdAAAAABAE" alt="" />
              <div className=' w-1/2'>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
              </div>
              <h2 className='text-xl font-semibold'>Rs193.20</h2>
          </div>
          <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
              <img className='h-10' src="data:image/jpeg;base64,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" alt="" />
              <div className='ml-2 w-1/2'>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
              </div>
              <h2 className='text-xl font-semibold'>Rs193.20</h2>
          </div>
          <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
              <img className='h-10' src="data:image/jpeg;base64,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" alt="" />
              <div className='ml-2 w-1/2'>
                <h4 className='font-medium text-base'>moto <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className='font-medium text-sm'>3 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
              </div>
              <h2 className='text-xl font-semibold'>Rs65.20</h2>
          </div>
          <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
              <img className='h-10' src="data:image/jpeg;base64,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" alt="" />
              <div className='ml-2 w-1/2'>
                <h4 className='font-medium text-base'>uber auto <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className='font-medium text-sm'>3 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
              </div>
              <h2 className='text-xl font-semibold'>Rs118.86</h2>
          </div>

        </div>
      </div>
    )
}

export default Home


{/* <div className='bg-cover bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7nYjqZKF2w8uellzG1Yo15WOfakWob41LA&s)] h-screen pt-8  flex justify-between flex-col w-full'>
            
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4 '>
                <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 '>Continue</Link>

            </div>
        </div> */}