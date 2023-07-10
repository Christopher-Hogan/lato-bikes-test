import { NativeModules } from "react-native";
import { font } from "../../../theme/native/custom-variables";

// Dark Mode - Inherits OS theme if possible
export const darkMode = NativeModules && NativeModules.RNDarkMode && NativeModules.RNDarkMode.initialMode
    ? NativeModules.RNDarkMode.initialMode === "dark"
    : false;

export const barChart = {
    container: {
        height: 250,
    },
    chart: {
        //transform: [{ rotate: '270deg' }],
    },
    grid: {
        paddingLeft: 40,
        lineColor: '#fff',
        paddingRight: 20,
        paddingBottom: 10,
    },
    xAxis: {
        //color: darkMode ? 'white' : font.colorTitle,
        lineColor: 'transparent',
        color: 'transparent',
    },
    yAxis: {
        //color: background.primary,
        lineColor: 'transparent',
    },
    legend: {
        label: {
            color: darkMode ? 'white' : font.colorTitle,
            fontSize: font.size,
            width: '100%',
        }
    }
};