import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Header extends Component{
    render(){
        return(
           
            <div>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    <Link className="navbar-brand" to="/">REDUX Mini Project</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div style={{fontSize: 18}} className="navbar-nav mx-auto">
                            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/about">About</Link>
                            <Link className="nav-item nav-link" to="/services">Services</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default Header;