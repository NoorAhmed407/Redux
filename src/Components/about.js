import React from 'react';
import {connect} from 'react-redux'



const Cards = (props) =>{
    return(
        <div className="col-md-4">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <img alt="cardpic" src={`https://joeschmoe.io/api/v1/${props.cardname}`} />
                </div>
                <div className="card-body text-center text-dark">
                    <h2 className="card-title">{props.cardname}</h2>
                    <h5 className="card-text">{props.cardDesignation}</h5>
                </div>
            </div>
        </div>
    );
}




class About extends React.Component{

    render(){
        return(
            <div>
                 <h1 className="text-center mt-5">About Us</h1>
                 <div className="row">
                    {
                        this.props.data.map(getCardData=>{
                        
                            return(
                                <Cards
                                key={getCardData.id}
                                cardname={getCardData.name}
                                cardDesignation={getCardData.Designation}           
                            />
                            ) 
                        })
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