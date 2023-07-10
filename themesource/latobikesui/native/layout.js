import { Appearance } from "react-native";
import { contrast, brand, font } from "../../../theme/native/custom-variables";

export const darkMode = Appearance.getColorScheme() === "dark";

/*-- main cta button --*/
export const mainButton = {
    container: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        width: '80%',
        backgroundColor: brand.primary,
    },
    icon: {
        size: 30,
    },
    caption: {
        fontSize: font.sizeLarge,
    }
};

/*-- user image dark --*/
export const userImageDark = {
    image: {
        borderWidth: 1,
        borderColor: contrast.high,
        overflow: "hidden",
        backgroundColor: 'white',
        borderRadius: 44,
    }
};

/*-- user image container dark --*/
export const userImageContainerDark = {
    container: {
        borderWidth: 1,
        borderColor: contrast.high,
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderRadius: 80,
        overflow: "hidden",
    }
};