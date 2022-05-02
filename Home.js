import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://www.dkorinteriors.com/wp-content/uploads/2019/06/Vacation-Home-Interior-Design-DKOR-Interiors-Project.jpg"
          title="Unique Stay"
          description="More than just a place to sleep"
        />
        <Card
          src="https://i.pinimg.com/originals/c5/a4/3e/c5a43ec0e24e77c759506564ed875387.jpg"
          title="Entire Homes"
          description="Home like palace"
        />
        <Card
          src="https://uknow.uky.edu/sites/default/files/styles/twitter_summary_large/public/GettyImages-1160947136%20%281%29.jpg?itok=kGxETWWH"
          title="Online Experiences"
          description="A new way to travel"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://cdn.home-designing.com/wp-content/uploads/2016/03/single-bedroom-homes-with-studies.jpg"
          title="1 Bedroom apartment"
          description="A great comfortable place"
          price="$80/night"
        />

        <Card
          src="https://cdn.squaremile.com/featured_image/58eb73a4781da.jpeg"
          title="Penthouse in London"
          description="Enjoy the amazing sight of london"
          price="$450/night"
        />
        <Card
          src="https://i.ytimg.com/vi/EpQmyJc1IEY/maxresdefault.jpg"
          title="3 Bedroom flats in maimi"
          description="A better place"
          price="$170/night"
        />
      </div>
    </div>
  );
}

export default Home;
