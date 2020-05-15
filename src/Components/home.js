import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {connect} from 'react-redux';

    AOS.init();
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
        height: "100vh",
        },

    };

    render(){
        return(
            <div className="mx-auto text-white text-center" 
            style={this.styles.main}>
                <h1 
                data-aos="fade-right"
                data-aos-duration="1500"
                className="font-weight-bold p-2 bg-success" 
                style={this.styles.heading}>
                    {this.props.data.Title}
                </h1>

                <h2 
                data-aos="fade-left"
                data-aos-duration="1500"
                className="mt-3">{this.props.data.subTitle}</h2>               
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