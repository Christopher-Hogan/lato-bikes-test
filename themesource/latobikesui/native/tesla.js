import {contrast, brand} from "../core/variables";
export const buttonInvisible ={
    button:{
        backgroundColor:'transparent'
    },
    caption:{
        color:'transparent'
    },
    container:{
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    }
}

export const borderRight = {
    container:{
        borderRightWidth:1,
        borderRightColor:'#D7D7D7'
    }
}

export const sideWelcome = {
    container:{
        height:100,
        backgroundColor:'#f4f4f4',
        padding:10
    }
}
export const sideMenu = {
    
}

export const btnCamera = {
    icon:{
        size:30
    }
}

export const menubtn = {
    container:{
        borderRadius:0,
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomColor: '#d0d1d2',
        backgroundColor:'transparent',
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth: 0,
        paddingLeft:8,
        paddingBottom:15,
        paddingTop:15,
        width: '100%'

    },
    caption:{
       color:contrast.highest,
       fontWeight:'normal',
       fontSize:16
    },
    icon:{
        color:contrast.highest
    }
}

export const bookingImage = {
    container:{
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#ccc',
        borderWidth: 1,
        borderRadius:50/2,

    },
    image:{
        width:50,
        height:50,
        borderRadius:50/2,
        resizeMode:'contain'
    }

}

export const carControl = {

    container:{
        backgroundColor: 'transparent',
        width:70,
        height:70,
        borderColor:contrast.highest,
        shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
        borderRadius:70/2,

    },
    icon:{
        color: contrast.highest,
        size: 20,
    }
}

export const on = {
    container:{
        backgroundColor: brand.primary,
        borderColor:brand.primary
    },
    icon:{
        color: '#fff',
    }
}
export const chargeIcon={
    image:{
        width:80,
        padding:0
    }
}
export const yourCarImage = {
    image:{
        width:'100%',
        height:250,
        resizeMode:'cover'
    }
}
export const batteryProgress = {
    container:{
        marginTop:5,
        marginBottom:5
    },
    bar:{
        backgroundColor:'#f4f4f4',
        padding:0,
        justifyContent:'center',
        height:30,
        borderWidth:1,
        borderColor:'#000',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    fill:{
        backgroundColor:'#11b719',

    }
}

export const btnCharge = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding:0,
    },
    icon:{
        size:40
    }
}
export const alertWarning = {
    container:{
        backgroundColor:'#fff3cd',
        borderRadius:5,
        padding:10,
        borderColor:'#ffeeba',
        borderWidth: 1,
        borderStyle:'solid',
        marginRight:20
    }
}
export const alertWarningText ={
    text:{
        color: '#856404'
    }
}

/*-- background image --*/
export const creditCardImage = {
    image: {
        width: '100%',
        resizeMode: 'contain'
    },
};

/*-- container over background image --*/
export const overCreditCardNumber = {
    container: {
        position: "absolute",
        top: 0, 
        left: 15, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'flex-start',
    },
};

export const creditCardContainer = {
    container:{
        height:270,
        position:"relative"
    }
}
export const cardInput = {
    container:{
        position:"relative"
    }
}
/*-- container over background image --*/
export const overCreditCardType = {
    container: {
    },
};

/*-- container over background image --*/
export const masterCardLogo = {
    image: {
        width: 50,
        height: 39,
        position: "absolute",
        right: 15, 
        bottom: 40,
    },
};

/*-- container over background image --*/
export const visaLogo = {
    image: {
        width: 65,
        height: 20,
        position: "absolute",
        right: 15, 
        bottom: 60,
    },
};

/*-- container over background image --*/
export const amexLogo = {
    image: {
        width: 71,
        height: 20,
        position: "absolute",
        right: 15, 
        bottom: 50,
    },
};

/*-- container over background image --*/
export const overCreditCardLogo = {
    container: {
        position: "absolute",
        right: 5, 
        top: 60, 
    },
};

/*-- container over background image --*/
export const overlayFrozen = {
    container: {
        position: "absolute",
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: 'white',
        opacity: 0.5,
    },
};

/*-- logo-icon image --*/
export const logoIconImage = {
    image: {
        width: 35,
        height: 35,
    }
};

export const gpsLocation = {
    icon:{
        color:'#fff'
    }
}