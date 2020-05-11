import Bg from './images/homebg.jpeg';  

const iState = {
    homeData: {
        backgroundImage: Bg,
        Title: "Development Experiences",
        subTitle: "Well known UI Frameworks"
    },
    aboutData: "",
    serviceData: ""
}

const reducer = (state=iState,action)=>{
    return state;
}


export default reducer;