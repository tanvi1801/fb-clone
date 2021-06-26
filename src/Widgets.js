import React from 'react'
import './Widgets.css'


function Widgets() {
    return (
        <div className="widgets">
            <iframe 
            title="fb-clone widgets"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340" height="100%" scrolling="no" frameBorder="0"
            allowTransparency="true" allow="encypted-media"
            style={{border:"none",overflow:"hidden"}} >

            </iframe>
        </div>
    )
}

export default Widgets
