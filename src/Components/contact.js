import React, { Component } from 'react';
import { connect } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();


class Contact extends Component{

    state = {
        headData:{
            headName: "",
            headEmail: "",
            headPhone: "",
            headMsg: ""
        },
        fullname : "",
        email: "",
        phone: "",
        message: ""
    };

    handleInput = (event, props) =>{
        this.setState({[event.target.name]: event.target.value})
    }   

    handleClick=(e)=>{
        let st = this.state;
        if(st.fullname && st.email && st.phone && st.message !== ""){
            alert(`Dear ${st.fullname} thank you for your response! you will be served soon`);
            this.setState(prevState => ({
                headData: {
                    ...prevState.headData,
                    headName: this.state.fullname,
                    headPhone: this.state.phone,
                    headEmail: this.state.email,
                    headMsg: this.state.message
                }
            }))


        }
        else{ 
            alert("Please Fill all the required fields");
    }
    e.preventDefault();
       
    }

    render(){
        return(
            <div className="container">
                <h1  
                data-aos="fade-right"
                className="text-center mt-5">Contact Us</h1>

                <div className="col-md-6 mx-auto">
                    <form className="m-5"
                    data-aos="zoom-in-left"
                    data-aos-duration="1000">
                        <label>Name: </label>
                        <input 
                        name="fullname"
                        type="text"
                        className="form-control"
                        onChange={this.handleInput} /> <br/>

                        <label>Email </label>
                        <input 
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={this.handleInput} /> <br/>

                        <label>Phone </label>
                        <input 
                        type="number"
                        name="phone"
                        className="form-control"
                        onChange={this.handleInput} /> <br/>

                        <label>Message</label>
                        <textarea 
                        onChange={this.handleInput}
                        name="message"
                        className="form-control" /> <br />

                        <button 
                        onClick={this.handleClick}
                        className="btn btn-lg btn-warning float-right">Send</button>

                        <h2 className="mt-5">
                            {this.state.headData.headName}  <br/>
                            {this.state.headData.headEmail} <br/>
                            {this.state.headData.headPhone} <br/>
                            {this.state.headData.headMsg}   <br/>
                        </h2>

                    </form>
                </div>

            </div>
        );
    }
}



export default connect()(Contact);