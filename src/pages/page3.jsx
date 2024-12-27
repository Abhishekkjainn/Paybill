import Marquee from 'react-fast-marquee';
import Lottie from 'react-lottie-player';
import { useEffect, useState } from 'react';
export default function Page3() {
  const [animationData, setAnimationData] = useState(null);
  const [Message, setMessage] = useState(null);
  const [Warehouse, setWarehouse] = useState(null);
  const [Dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetch('/easybilling.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);
  useEffect(() => {
    fetch('/message.json')
      .then((response) => response.json())
      .then((data) => setMessage(data));
  }, []);
  useEffect(() => {
    fetch('/warehouse.json')
      .then((response) => response.json())
      .then((data) => setWarehouse(data));
  }, []);
  useEffect(() => {
    fetch('/userdashboard.json')
      .then((response) => response.json())
      .then((data) => setDashboard(data));
  }, []);
  return (
    <div className="page3">
      <div className="page3tag">
        <div className="circle-small"></div>
        <div className="tagname">Features</div>
      </div>
      <div className="page3head">
        What we
        <span className="italics blue">
          <i> Offer.</i>
        </span>
      </div>

      <div className="featurediv">
        <Marquee>
          <div className="feature">
            <div className="anim">
              <Lottie
                className="lottieanim"
                loop
                animationData={animationData}
                play
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div className="featurehead">Effortless Digital Billing.</div>
            <div className="featuredesc">
              Create accurate, professional bills in moments—quick, easy, and
              hassle-free.
            </div>
          </div>
          <div className="feature feature-blue">
            <div className="anim">
              <Lottie
                className="lottieanim"
                loop
                animationData={Message}
                play
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div className="featurehead">SMS-Based Bill Delivery</div>
            <div className="featuredesc">
              Deliver bills instantly to your customers via secure SMS links,
              ensuring quick and convenient access anytime.
            </div>
          </div>
          <div className="feature feature-orange">
            <div className="anim">
              <Lottie
                className="lottieanim"
                loop
                animationData={Warehouse}
                play
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div className="featurehead">Smart Product Management</div>
            <div className="featuredesc">
              Quickly organize and update products with essential details like
              ID, name, price, and description
            </div>
          </div>
          <div className="feature feature-green">
            <div className="anim">
              <Lottie
                className="lottieanim"
                loop
                animationData={Dashboard}
                play
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div className="featurehead">Intuitive User Dashboard</div>
            <div className="featuredesc">
              Access and manage all your bills in one place with a clean,
              user-friendly dashboard designed for easy navigation.
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
