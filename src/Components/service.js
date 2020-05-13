import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {connect} from 'react-redux';


AOS.init();


const SeviceCards = (props)=>{
    return(
        <div className="col-md-4">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <img 
                    style={{width: "100%", height: "400px"}}
                    alt="cardpic" 
                    src={props.serviceimg} />
                </div>
                <div 
                data-aos="zoom-in" 
                data-aos-duration="1000"
                className="card-body text-center text-dark">
                    <h2 className="card-title">{props.servicename}</h2>
                </div>
            </div>

        </div>
    );
}


class Services extends Component{

    getServices = (props) =>{
        const getservice = 
        this.props.data.map(getServiceData=>{
            return(
                <SeviceCards
                key={getServiceData.id}
                servicename = {getServiceData.serviceName}
                serviceimg = {getServiceData.seviceImg}
                />
            );
        });

        return getservice;
    }
    
    render(){
        return(
            <div>
               <h1 
               data-aos="fade-right"
               className="mt-5 text-center">Services</h1>
               <div className="row m-5">
                    {
                        this.getServices()
                    }
               </div>
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return{
        data: state.serviceData.serviceCards
    }
}

export default connect(mapStateToProps)(Services);