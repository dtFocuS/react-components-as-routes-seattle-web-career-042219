import React, { Component } from 'react';
// import Home from './Home';
// import About from './About';
// import Login from './Login';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';



class Navbar extends Component {

    

    render() {
        const link = {
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'blue',
            textDecoration: 'none',
            color: 'white',
        }
        return(
            <div>
                <NavLink
                    to="/"
                    /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                    exact
                    /* add styling to Navlink */
                    style={link}
                    /* add prop for activeStyle */
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Home</NavLink>
                <NavLink
                    to="/about"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >About</NavLink>
                <NavLink
                    to="/login"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Login</NavLink>
            </div>
        )
    }



}

export default Navbar;