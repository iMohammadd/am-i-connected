import { useEffect, useState } from "react"
import axios from 'axios'
import useSound from "use-sound"
import beep from '/beep.mp3'

const App = () => {
  const [ip, setIp] = useState("")
  const [time, setTime] = useState("")
  const [error, setError] = useState(false)
  const [play] = useSound(beep, {
    volume: 1
  })
  const getIp = () => {
    axios.get('https://icanhazip.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => {
      setError(false)
      setIp(response.data)
    })
    .catch(error => {
      setError(true)
      setIp("!!")
      console.log(error)
      play()
    })
  }
  useEffect(() => {
    getIp()
    setTime(new Date().toLocaleTimeString())

    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

    const connection = setInterval(() => {
      getIp()
      console.log('code executed')
    }, 60000)

    return () => {
      clearInterval(timer)
      clearInterval(connection)
    }
  }, [])

  return (
    <div className={`${error ? 'bg-red-600' : 'bg-gray-800'} w-full h-screen flex justify-center items-center`}>
      <h1 className={`text-3xl font-bold text-white`} onClick={() => play()} >{ip}    {time}</h1>
      <button className=" rounded bg-indigo-500 text-white px-2 py-1 ml-6" onClick={() => getIp()}>Get IP</button>
    </div>
  )
}

export default App
