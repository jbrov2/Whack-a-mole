import { useEffect } from "react";
import moleHill from './molehill.png'

const EmptySlot = (props) => {
    useEffect(() => {
        let randSecs = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSecs)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleHill}
            onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot