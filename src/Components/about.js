import React from 'react';
import {connect} from 'react-redux'



const Cards = (props) =>{
    return(
        <div className="col-md-4">
            <div class="card border-dark mb-3">
                <div class="card-header">
                    <img alt="cardpic" src={`https://joeschmoe.io/api/v1/${props.cardname}`} />
                </div>
                <div class="card-body text-dark">
                    <h2 class="card-title">{props.cardname}</h2>
                    <h5 class="card-text">{props.cardDesignation}</h5>
                </div>
            </div>
        </div>
    );
}


    const getCards = (props) => {
        const getcard = props.data.map(getCardData=>{
            return(
            <Cards
            key={getCardData.id}
            cardname={getCardData.name}
            cardDesignation={getCardData.Designation}
            />
            )
        });

        return getcard;
    }

class About extends React.Component{
    render(){
        return(
            <div>
            
                 <h1 className="text-center mt-5">About Us</h1>

                 <div className="row">
                    {this.getCards}
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