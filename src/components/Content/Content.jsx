import React from "react";
import "./Content.css";
import guest1 from "../../images/guest1.png";
import guest2 from "../../images/guest2.png";
import guest3 from "../../images/guest3.png";
const Content = () => {
  return (
    <div className="maindiv">
      <div className="leftdiv">
        <div className="notes">
          <p className="notesheading">Notes</p>
          <p className="subcontent">
            In this episode, It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the with the release of letraset
            sheets containing passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="topics">
          <p className="subheading">Topics</p>
          <p className="subcontent">
            ›<p className="num">0:55</p> Jason's first podcast ever{" "}
          </p>
          <p className="subcontent">
            › <p className="num">0:55</p>Helen's been on other podcasts:
            Startups for the Rest of Us, Indie Bites, Indie Worldwide
          </p>
          <p className="subcontent">
            › <p className="num">3:06</p> Should we invest in the "auto publish
            to YouTube" feature?{" "}
          </p>
          <p className="subcontent">
            ›<p className="num">13:32</p> The best features the ones that feel
            like "magic" when a customer uses them
          </p>
          <p className="subcontent">
            ›<p className="num">18:46</p> The "wait and see" product development
            philosophy
          </p>
          <p className="subcontent">
            {" "}
            ›<p className="num"> 20:27 </p>A new podcast website builder CMS and
            website designs
          </p>
          <p className="subcontent">
            {" "}
            ›<p className="num">32:24</p> Making a few new podcast website
            themes
          </p>
          <p className="subcontent">
            {" "}
            › <p className="num">34:30</p> Howwe run our weekly team meetings
          </p>
        </div>
        <div className="contributors">
          <p className="subheading">Contributors</p>
          <p className="subcontent">
            — <p className="names">Johna Budaa</p> lives in London, UK. He's
            been involved in the podcasting world since 2013, and has been
            building software since 2002.
          </p>
          <p className="subcontent">
            —<p className="names"> Mark Mitchel</p> lives in London, UK. He's
            been involved in the podcasting world since 2013, and has been
            building software since 2002.
          </p>
          <p className="subcontent">
            — <p className="names">Mary James </p>lives in London, UK. He's been
            involved in the podcasting world since 2013, and has been building
            software since 2002.
          </p>
          <br></br>
          <br></br>
          <p className="subcontent">
            If you liked this episode, popularised in the with the release of
            letraset sheets containing passages, and more recently with desktop
            @PublishingSoftware.
          </p>
        </div>
      </div>
      <div className="rightdiv">
        <div className="guests">
          <div>
            <p className="hostnguest">Hosts & guests</p>
          </div>
          <div className="guest2">
            <div>
              <img
                src={guest1}
                alt="img not available"
                className="guestimage"
              ></img>
            </div>
            <div className="username">
              <p className="names1">Samantha James</p>
              <p className="id">@sammyjames</p>
            </div>
          </div>
          <div className="guest2">
            <div>
              <img
                src={guest2}
                alt="img not available"
                className="guestimage"
              ></img>
            </div>
            <div className="username">
              <p className="names1">Quentin Villard</p>
              <p className="id">@quentin789</p>
            </div>
          </div>
          <div className="guest2">
            <div>
              <img
                src={guest3}
                alt="img not available"
                className="guestimage"
              ></img>
            </div>
            <div className="username">
              <p className="names1">Oliver Martinez</p>
              <p className="id">@OliverMarti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
