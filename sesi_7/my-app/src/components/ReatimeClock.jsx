import { useEffect, useState } from "react"

const RealtimeClock = () => {
    const [date, setDate] = useState(new Date())
    
    let interval = null
    
    useEffect(() => {
       interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        
        return () => {
            clearInterval(interval)
        }
    }, [date])
    
    return (
        <>
            <h1>Realtime Clock</h1>
            <h2>{date.toLocaleTimeString()}</h2>
        </>
    )
}

export default RealtimeClock