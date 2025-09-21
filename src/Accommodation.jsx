import Divider from "./Divider";
import "./App.css";
import "./Accommodation.css";
import AccommVenueCard from "./AccommVenueCard";
import accommVenues from "./AccommVenues";

const Accommodation = () => {

  return (
    <div className="main-container margin-top-of-page">
      <div className="wrapper__content">
        <h1 className="accommodation__heading">
          Accommodation
        </h1>
        <p className="p-lrg">
            Recommendations from the wedding venue owners.
        </p>
      </div>
      <Divider />
      <div id="venue-card-group" className="wrapper__content">
        {accommVenues.map((card, index) => (
            <AccommVenueCard image={card.img} name={card.name} desc={card.desc} address={card.address} tel={card.tel} url={card.url} key={index} id={`venue-card-${index}`}/>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;