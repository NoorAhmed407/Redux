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
                name: "Person1",
                Designation: "CEO"
            },

            {
                id: 2,
                name: "Person2",
                Designation: "Apps Developer"
            },

            {
                id: 3,
                name: "Person3",
                Designation: "SQA"
            }
        ]
    },

    serviceData: {
        serviceCards: [
            {
                id: 1,
                serviceName: "Web Development",
                seviceImg: require('./images/web.png')
            },

            {
                id: 2,
                serviceName: "Mobile Development",
                seviceImg: require('./images/mobile.png')
            },

            {
                id: 3,
                serviceName: "Games Development",
                seviceImg: require('./images/game.png')
            },
        ]
    },

}

const reducer = (state=iState,action)=>{
    return state;
}


export default reducer;