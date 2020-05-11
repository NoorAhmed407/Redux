import React, { Component } from 'react';


class Header extends Component{
    render(){
        return(
            <div>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    <a className="navbar-brand" href="#">REDUX</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">About</a>
                            <a className="nav-item nav-link" href="#">Services</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;