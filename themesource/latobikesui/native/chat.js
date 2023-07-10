import { Platform } from "react-native";
import { contrast } from "../../../theme/native/custom-variables";

/* Chatbot */
export const fromThem = {
    container:{
        backgroundColor: '#0097CA',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius: 10,
        marginBottom:20,
        width: '75%',
        borderBottomLeftRadius: 0,
    },
};

export const fromMe = {
    container:{
        backgroundColor: '#4600CA',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius: 10,
        marginBottom:20,
        borderBottomRightRadius: 0,
        width: '75%',
        alignSelf: 'flex-end'
    }
};

// export const chatBtnRounded = {
//     container:{
//         borderRadius:50,
//         width: 60,
//         height:60,
//         marginLeft:5,
//         padding:0,
//         ...Platform.select({
//             ios: {
//                 height: 52,
//             },
//             android: {
//                 height: 60,
//             },
//         }),
//     },
//     icon:{
//         width:60,
//         height:60
//         // fontSize:80
//     },
// };

export const chatBtnRounded = {
    container:{
        borderRadius:10,
        height: 40,
        width: 50,
        //backgroundColor: null,
        //borderLeftColor: null,
        borderColor:contrast.high,
        paddingHorizontal: 0,
        paddingVertical: 0,
        ...Platform.select({
            ios: {
                height: 52,
            },
            android: {
                height: 40,
            },
        }),
    },
    icon:{
        size:20,
        color: '#fff'
    },
}

export const cameraBtn = {
    container:{
        borderRadius:10,
        height: 40,
        width: 40,
        backgroundColor: null,
        paddingHorizontal: 0,
        paddingVertical: 0,
        //borderLeftColor: null,
        borderColor:contrast.high,
        ...Platform.select({
            ios: {
                height: 52,
            },
            android: {
                height: 40,
            },
        }),
    },
    icon:{
        fontSize:20,
        color: contrast.highest
    },
}

export const chatTextBox = {
    container: {
        width: 220,
        height: 40,
    },
    input:{
        //borderRightWidth: 0,
        borderRadius:10,
        // borderBottomRightRadius: 0,
        // borderTopRightRadius: 0,
        // borderRightColor:null,
        paddingVertical: 5,
        borderColor:contrast.high,
    },
};

export const chatActivityIndicator = {
    indicator: {
        color: 'white',
    },
};

export const chatList = {
    container: {
        flexDirection: 'column-reverse',
    }
};