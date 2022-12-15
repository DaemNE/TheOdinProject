import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    
    
    const startTimer = () => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return ()  => {
            stopTimer()
        }
    }, [])

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current)
        }
    }

    return (
        <div>
            HookTimer - {timer} - 
            <div>
                <button onClick={() => stopTimer()}>Stop Timer</button>
            </div>

        </div>
    )
    
}