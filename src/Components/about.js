import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {connect} from 'react-redux'

AOS.init();

const Cards = (props) =>{
    return(
        <div className="col-md-4">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <img 
                    alt="cardpic" 
                    src={`https://joeschmoe.io/api/v1/${props.cardname}`} />
                </div>
                <div 
                data-aos="zoom-in" 
                data-aos-duration="1000"
                className="card-body text-center text-dark">
                    <h2 className="card-title">{props.cardname}</h2>
                    <h5 className="card-text">{props.cardDesignation}</h5>
                </div>
            </div>
        </div>
    );
}




class About extends React.Component{


    getCards = (props) =>{
       const getcard =  this.props.data.map(getCardData=>{
                        
            return(
                <Cards
                key={getCardData.id}
                cardname={getCardData.name}
                cardDesignation={getCardData.Designation}           
            />
            );
        });

        return getcard;
    }


    render(){
        return(
            <div>
                 <h1 
                 data-aos="zoom-in-right"
                 className="text-center mt-5">About Us</h1>
                 <div className="row m-5">
                    {
                       this.getCards()
                    }
                 </div>           
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        data: state.aboutData.cardData
    }
}

export default connect(mapStateToProps)(About);