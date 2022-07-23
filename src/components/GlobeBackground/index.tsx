import { GlobeBackground } from "../../utils/interfaces/globeBackground";
import { BackgroundImage, ImageWrapper } from "./style";

export function GlobeBackground({ backgroundType }: GlobeBackground) {
    return (
        <ImageWrapper className={backgroundType}>
            {backgroundType == 'RegisterPage' && <BackgroundImage className={backgroundType} src="assets/background_globe_register.svg" />}
            {backgroundType == 'FeedbackPage' && <BackgroundImage className={backgroundType} src="assets/background_globe_feedback.svg" />}
        </ImageWrapper>
    )
}