import React, { Component } from 'react';
import {connect} from 'react-redux';


class Home extends Component{

styles = {
     main: {
         width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${this.props.data.backgroundImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        alignItems: "center",
        height: "80vh",
        },

    };


    render(){
        return(
            <div className="mx-auto text-white text-center" 
            style={this.styles.main}>
                <h1 className="font-weight-bold p-2 bg-success" 
                style={this.styles.heading}>
                    {this.props.data.Title}
                </h1>

                <h2 className="mt-3">{this.props.data.subTitle}</h2>               
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return{
        data: state.homeData
    }
}


export default  connect(mapStateToProps)(Home);