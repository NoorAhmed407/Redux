import Bg from './images/homebg.jpeg';  

const iState = {
    homeData: {
        backgroundImage: Bg,
        Title: "Development Experiences",
        subTitle: "Well known UI Frameworks"
    },
    aboutData: {
        cardData: [
            {
                id: 1,
                name: "Noor Uddin",
                Designation: "CEO"
            },

            {
                id: 2,
                name: "Talha Mansoor",
                Designation: "Apps Developer"
            },

            {
                id: 3,
                name: "Abdul Rafay",
                Designation: "SQA"
            }
        ]
    },
    serviceData: ""
}

const reducer = (state=iState,action)=>{
    return state;
}


export default reducer;