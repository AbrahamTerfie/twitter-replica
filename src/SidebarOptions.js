import React from 'react'
import "./Sidebaroptions.css";
function SidebarOptions({active ,text, Icon}) {
    return (
        <div className={`sidebarOptions ${active &&"sidebaroption--active"}`}>
            <Icon />
            <h2>{text} </h2>
        </div>
    )
}

export default SidebarOptions
