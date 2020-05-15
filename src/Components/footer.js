import React, {Component} from 'react';
import { connect } from 'react-redux';


class Footer extends Component{

    render(){
        return(
            <div 
            className="bg-secondary text-white"
            style={{overflowX: "hidden"}}>
                <div className="container">
                    <h1 className="text-center font-weight-bold mt-5">
                        Footer
                    </h1>
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <h3 className="text-center">Join us</h3>
                            {
                               this.props.data.iconarr.map((data,ind)=>{
                                    return(
                                        <a
                                        target="_blank"
                                        href={this.props.data.route[ind]}>
                                        <img
                                        alt="social"
                                        key={data.id}
                                        className="m-3"
                                        src={`https://img.icons8.com/doodle/60/000000/${data.value}.png`}/>
                                        </a>
                                    );
                                })
                            }
                         </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps=(state)=>{
    return{
        data: state.footerData
    }
}


export default connect(mapStateToProps)(Footer);