import React from 'react';
import Button from './Button';
import NavBar from './NavBar';
import Divider from './Divider';
import Countdown from './Countdown';
import IMAGES from './img/Images';
import Polaroids from './Polaroids';
import polaroidImages from './ImageList';
import './App.css';

function App() {

  return (
    <>
      <div className="wrapper__img">
        <img src={IMAGES.floralFooter} alt="Footer image" style={{transform:"scaleY(-1) scaleX(-1)"}}/>
        <p className='p-lrg'>
          Welcome to the wed-site of
        </p>
      </div>
      {/* <NavBar /> */}
      <Divider />
      <h1 style={{marginLeft: 9}}>
        Isabelle<br />
        &<br />
        Renay
      </h1>
      <Divider />
      <Countdown />
      <Button link={"#intro"} buttonLabel={"Jump to info"}/>
      <Polaroids images={polaroidImages} />
      <div className="wrapper__content" id='intro'>
        <p className="p-lrg">
          We joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends.
        </p>
        <p>
          The Oak Barn in Cranbrook will be our venue hosting the ceremony, breakfast, and evening celebrations. One destination that does it all.
        </p>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>
          When
        </h2>
        <p className="p-lrg">
          Saturday 19th September 2026
        </p>
        <Button link={"https://yourdomain.com/isabelle-renay-wedding.ics"} buttonLabel={"Save the date (iOS)"}/>
        <Button link={"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Isabelle%20%26%20Renay%27s%20Wedding&dates=20260919T110000Z/20260919T120000Z"} buttonLabel={"Save the date (Google)"}/>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>
          Where
        </h2>
        <p className="p-lrg">
          The Oak Barn, Frame Farm
        </p>
        <p>
          Iden Green Road,<br />
          Benenden, Iden Green,<br />
          Cranbrook<br />
          TN17 4EZ
        </p>
        <Button link={"https://maps.app.goo.gl/yzmxsyZucJW6TAnm7"} buttonLabel={"Open in Google Maps"} target={"_blank"}/>
        <Button link={"https://w3w.co/embraced.extra.adventure"} buttonLabel={"Open in What3Words"} target={"_blank"}/>
        <Button link={"https://www.waze.com/live-map/directions/gb/england/benenden/the-oak-barn,-frame-farm-eco-wedding-venue,-kent-and-east-sussex?to=place.ChIJsdBNEYYj30cRUj3imsI2w5g"} buttonLabel={"Open in Waze"} target={"_blank"}/>
        <div id="accommodation" className="wrapper__content">
          <h3>
            Need accommodation?
          </h3>
          <p>
            Here’s our suggestions for places to stay...
          </p>
          <Button link={"#intro"} buttonLabel={"View places"}/>
        </div>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>
          The Day
        </h2>
        <ul className='p-lrg'>
          <li>Ceremony: X – Xpm</li>
          <li>Wedding Breakfast: X – Xpm</li>
          <li>Evening reception: X – 11pm</li>
          <li>Carriages: 11.30pm</li>
        </ul>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>
          Wedding Gifts
        </h2>
        <p className="p-lrg">
          Your presence and company at our special day is enough.
        </p>
        <p>
          If you’d like to contribute to one of our selected gifts or causes, we would consider this a huge act of generosity that we would be forever grateful for.
        </p>
        <Button link={"#intro"} buttonLabel={"Contribute gifts"}/>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>
          R.S.V.P
        </h2>
        <p className="p-lrg">
          Please let us know if you’re joining us on our special day.
        </p>
        <p>
          Make sure to R.S.V.P for each person on your invitation. This enables us to understand numbers and dietary requirements.
        </p>
        <Button link={"#intro"} buttonLabel={"Ceremony & evening"}/>
        <Button link={"#intro"} buttonLabel={"Evening celebrations"}/>
      </div>
      <Divider />
      <div className="wrapper__content">
        <h2>
          Contact
        </h2>
        <div>
          <p className="p-lrg">
            Isabelle
          </p>
          <p>
            07XXX XXXXXX
          </p>
        </div>
        <div>
          <p className="p-lrg">
            Renay
          </p>
          <p>
            07XXX XXXXXX
          </p>
        </div>
      </div>
      <div className="wrapper__img">
        <img src={IMAGES.floralFooter} alt="Footer image" />
        <p style={{color:"#4e5e657c", fontSize:12, marginTop: 6}}>
          © 2025. Designed and developed by Ben, the BIL.
        </p>
      </div>
    </>
  )
}

export default App