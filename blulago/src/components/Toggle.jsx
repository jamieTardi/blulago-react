import React, {useState} from 'react'

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
            <li className="pointer" >{title}</li>
            {toggle ? children : ""}
        </div>
    )
}

export default Toggle
