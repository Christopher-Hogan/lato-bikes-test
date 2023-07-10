import {contrast, brand} from "../../../theme/native/custom-variables";
import { anyColorToRgbString } from "../../atlas_core/native/core/helpers/_functions/convertcolors";

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
    container:{
        width: 58,
        height: 44,
    },
    image:{
        width:'100%',
        height: 44
    }
}

export const iconBike = {
    image:{
        width:55,
        height: 40
    }
}

export const batteryProgress = {
    container:{
        marginTop:0,
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

export const introImage = {
    image:{
        width: 300,
        height: 200,
        resizeMode: 'contain',
    }
}

export const btnCharge = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding: 0,
        margin: 0,
    },
    icon:{
        size:40
    }
}

export const btnArrow = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding: 0,
        margin: 0,
        width: 20,
    },
    icon:{
        size: 20,
        color: contrast.highest
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
}

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
}

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
}

/*-- container over background image --*/
export const masterCardLogo = {
    image: {
        width: 50,
        height: 39,
        position: "absolute",
        right: 15, 
        bottom: 40,
    },
}

/*-- container over background image --*/
export const visaLogo = {
    image: {
        width: 65,
        height: 20,
        position: "absolute",
        right: 15, 
        bottom: 60,
    },
}

/*-- container over background image --*/
export const amexLogo = {
    image: {
        width: 71,
        height: 20,
        position: "absolute",
        right: 15, 
        bottom: 50,
    },
}

/*-- container over background image --*/
export const overCreditCardLogo = {
    container: {
        position: "absolute",
        right: 5, 
        top: 60, 
    },
}

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
}

/*-- logo-icon image --*/
export const logoIconImage = {
    image: {
        width: 35,
        height: 35,
    }
}

export const gpsLocation = {
    icon:{
        color:'#fff'
    }
}

export const homemenu = {

}

export const mondayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#3e6ae1')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        //Only the backgroundColor property is allowed
        backgroundColor: '#3e6ae1',
    },
}

export const tuesdayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#76CA02')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        //Only the backgroundColor property is allowed
        backgroundColor: '#76CA02',
    },
}

export const wednesdayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#f99b1d')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        //Only the backgroundColor property is allowed
        backgroundColor: '#f99b1d',
    },
}

export const thursdayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#ed1c24')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        //Only the backgroundColor property is allowed
        backgroundColor: '#ed1c24',
    },
}

export const fridayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#d63ee1')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        //Only the backgroundColor property is allowed
        backgroundColor: '#d63ee1',
    },
}

export const saturdayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#abe13e')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        //Only the backgroundColor property is allowed
        backgroundColor: '#abe13e',
    },
}

export const sundayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#e1b53e')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        //Only the backgroundColor property is allowed
        backgroundColor: '#e1b53e',
    },
}

export const cardWhiteCustomShadow = {
    container: {
        shadowColor: '#0491bc',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 5
        }
    }
}

export const cardWhiteGraph = {
    container: {
        height: 250,
        paddingVertical: 5,
    }
}