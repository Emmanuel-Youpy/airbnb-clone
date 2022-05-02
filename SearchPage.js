import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 august to 30 august - 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F455b7bfc-2799-11e8-bb7d-85110f4c5caa.jpg?crop=1688%2C949%2C0%2C88&resize=1180"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . WIFI . Kitchen . Free parking . Washing Machine"
        star={4.77}
        price="$40/night"
      />

      <SearchResult
        img="https://cdn.cdnparenting.com/articles/2019/04/14175650/278188052-H.jpg"
        location="Family Magic Show and Magic Lesson"
        title="Self-Isolation and Social Distancing are in place everywhere around the world."
        description="3 guest . 6 bedroom . 5 bed . 1.5 shared bathrooms . WIFI . Kitchen . Free parking . Washing Machine"
        star={4.9}
        price="$90/night"
      />
      <SearchResult
        img="https://moderndiplomacy.eu/wp-content/uploads/2018/08/uzbekistan-forests.jpg"
        location="Colombia, sanitarium"
        title="Go On a Leopard Safari in Sri Lanka"
        description="Identifying individual leopards is a rather tricky yet exciting technique. We will meet online to talk about mastering the art of identifying individual leopards and to talk about electrifying leopard stories."
        star={4.5}
        price="$14/person"
      />
      <SearchResult
        img="https://www.familyeducation.com/sites/default/files/2016-11/Little_Kids_Playing_Board_Game_Indoors.jpg"
        location="Athens, USA"
        title="Learn Sign Language Through Games."
        description="Practice sign language in a fun and safe environment through games. We'll start the class by getting to know each other before breaking into teams and learning vocabulary, gestures, alphabet, and idiom."
        star={5.0}
        price="$9/person"
      />
    </div>
  );
}

export default SearchPage;
