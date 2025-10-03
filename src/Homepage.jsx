import Button from "./Button";
import Divider from "./Divider";
import Countdown from "./Countdown";
import Polaroids from "./Polaroids";
import polaroidImages from "./ImageList";
import LinkBtn from "./LinkBtn";
import "./App.css";

export default function Homepage() {
  return (
    <main className="main-container margin-top-of-page">
      <div className="wrapper__img">
        <p className="p-lrg">Welcome to the wed-site of</p>
      </div>
      <Divider />
      <h1 style={{ marginLeft: 9 }}>
        Isabelle
        <br />
        &<br />
        Renay
      </h1>
      <Divider />
      <Countdown />
      {/* <Button link={"#intro"} buttonLabel={"Jump to info"} /> */}
      <Polaroids images={polaroidImages} />
      <div className="wrapper__content" id="intro">
        <p className="p-lrg">
          We joyfully request the pleasure of your company as we speak our vows
          and join in marriage in the presence of family and friends.
        </p>
        <p>
          The Oak Barn in Cranbrook will be our venue hosting the ceremony,
          breakfast, and evening celebrations. One destination that does it all.
        </p>
        <p className="wrapper__content box">
          <em>
            As much as we love your little ones, we have made the decision to make this an adult only event excluding those of the bride and groom’s immediate family. We hope you understand.
          </em>
        </p>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>When</h2>
        <p className="p-lrg">Saturday 19th September 2026</p>
        <Button
          link={"https://yourdomain.com/isabelle-renay-wedding.ics"}
          buttonLabel={"Save the date (iOS / Outlook)"}
        />
        <Button
          link={
            "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Isabelle%20%26%20Renay%27s%20Wedding&dates=20260919T110000Z/20260919T120000Z"
          }
          buttonLabel={"Save the date (Google)"}
        />
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>Where</h2>
        <p className="p-lrg">The Oak Barn, Frame Farm</p>
        <p>
          Iden Green Road,
          <br />
          Benenden, Iden Green,
          <br />
          Cranbrook
          <br />
          TN17 4EZ
        </p>
        <Button
          link={"https://maps.app.goo.gl/yzmxsyZucJW6TAnm7"}
          buttonLabel={"Open in Google Maps"}
          target={"_blank"}
        />
        <Button
          link={"https://w3w.co/embraced.extra.adventure"}
          buttonLabel={"Open in What3Words"}
          target={"_blank"}
        />
        <Button
          link={
            "https://www.waze.com/live-map/directions/gb/england/benenden/the-oak-barn,-frame-farm-eco-wedding-venue,-kent-and-east-sussex?to=place.ChIJsdBNEYYj30cRUj3imsI2w5g"
          }
          buttonLabel={"Open in Waze"}
          target={"_blank"}
        />
        <div id="accommodation" className="wrapper__content box">
          <h3>Need accommodation?</h3>
          <p>Here’s our suggestions for places to stay...</p>
          <LinkBtn
            link={"/accommodation"}
            buttonLabel={"View places"}
          />
        </div>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>The Day</h2>
        <ul className="p-lrg">
          <li>Arrive: 11:30</li>
          <li>Ceremony: 12:00</li>
          <li>Reception: 12:30 onwards</li>
          <li>Evening celebration: 18:30</li>
          <li>Carriages: 23:00</li>
        </ul>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>Wedding Gifts</h2>
        <p className="p-lrg">
          Your presence and company at our special day is enough.
        </p>
        <p>
          However if you’d like to give a gift we’d be immensely grateful. We have put together a list of items to help set us up for married life here…
        </p>
        <Button
          link={"https://www.johnlewis.com/wish-list/MVTTVHN"}
          buttonLabel={"Contribute gifts"}
          target={"_blank"}
        />
      </div>
      <Divider />
      <div id="rsvp" className="wrapper__content">
        <h2>R.S.V.P</h2>
        <p className="p-lrg">
          Please let us know if you’re joining us on our special day.
        </p>
        <p>
          Make sure to R.S.V.P by <strong>1st February 2026</strong> for each person on your invitation. This enables us to understand numbers and dietary requirements.
        </p>
        <LinkBtn
          link={"/form-day"}
          buttonLabel={"Ceremony & evening"}
        />
        <LinkBtn
          link={"/form-eve"}
          buttonLabel={"Evening celebrations"}
        />
      </div>
    </main>
  );
}
