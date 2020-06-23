import React, { Component } from 'react'
import './Styling.css'
class Sidenav extends Component {
    render() {
        return (
            <div>
                <br></br><br></br>
                <ul style={{"listStyle":"none",paddingLeft:"40px",color: "darkslategray"}}>
                    <li className="listMenu">Home</li><br></br>
                    <li>PUBLIC</li>
                    <ul style={{"listStyle":"none", marginLeft:"-15px"}}>
                        <li className="listMenu">Stack Underflow</li>
                        <li className="listMenu">Tags</li>
                        <li className="listMenu">Users</li>
                        <li className="listMenu">Jobs</li>
                    </ul>
                </ul>
            </div>
        )
    }
}

export default Sidenav
