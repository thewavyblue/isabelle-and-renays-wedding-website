import Button from "./Button";
import IMAGES from './img/Images';
import Divider from "./Divider";
import "./App.css";

export default function Accommodation() {
  return (
    <div className="main-container">
      <div className="wrapper__content">
        <h2>Accommodation</h2>
        <p className="p-lrg">
            Recommendations from the wedding venue owners.
        </p>
      </div>
      <Divider />
      <div id="venue-card-group" className="wrapper__content">
        
      </div>
    </div>
  );
}
