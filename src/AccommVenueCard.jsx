import "./AccommVenueCard.css"
import Button from "./Button"

const AccommVenueCard = ({img, name, desc, address, tel, url}) => {
    return (
        <article className="venue-card">
          <img className="image__accomm" src={img} alt="" />
          <h3 className="venue-card--heading">
            {name}
          </h3>
          <p className="venue-card--text emphasis">
            {desc}
          </p>
          <p className="venue-card--text">
            {address} 
            <br />
            <a href={"tel:" + tel}>{tel}</a>
          </p>
          <Button
            link={url}
            buttonLabel={"Visit website"}
            target={"_blank"}
          />
        </article>
    )
}

export default AccommVenueCard