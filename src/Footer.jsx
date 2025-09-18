import IMAGES from "./img/Images"
import "./App.css"

export default function Footer() {
    return (
        <div className="wrapper__img">
            <img src={IMAGES.floralFooter} alt="Footer image" />
            <p style={{ color: "#4e5e657c", fontSize: 12, marginTop: 6 }}>
            © 2025. Designed and developed by Ben, the BIL.
            </p>
        </div>
    )
}