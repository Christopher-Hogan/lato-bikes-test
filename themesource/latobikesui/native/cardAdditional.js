import { setContrastScale } from "../../atlas_core/native/core/helpers/_functions/convertcolors";
import { background, contrast, spacing } from "../../../theme/native/custom-variables";

/* ==========================================================================
    Cards Additional

========================================================================== */

export const cardWhite = {
    container: {
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: spacing.regular,

        ...Platform.select({
            android: {
                borderWidth: 1,
                borderColor: contrast.lowest,
            },
        }),
        elevation: 1.5,
        padding:20,
        shadowColor: setContrastScale(0.2, background.primary),
        shadowOpacity: 0.7,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
};