import React, { useState, useEffect } from "react";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
  Text,
  Sphere,
} from "react-simple-maps";
import CountryModal from "../UI/CountryModal";
import classes from "./MapChart.module.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function MapChart({ selectedColor }) {
  const [styles, setStyles] = useState("green");

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [ctData, setCtData] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    const getCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${selectedCountry["Alpha-2"]}`
      );
      const country = await response.json();
      setCtData(country);
    };
    if (selectedCountry) {
      getCountries();
    }
    if (isShowing) {
      setIsLoading(false);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (ctData.length > 0) {
      setSelectedCountry(null);
      setIsShowing(true);
    }
    setIsLoading(false);
  }, [ctData]);

  useEffect(() => {
    switch (selectedColor) {
      case "Gray":
        setStyles("gray");
        break;
      case "Yellow":
        setStyles("yellow");
        break;
      case "Green":
        setStyles("green");
        break;
      case "Bisque":
        setStyles("bisque");
        break;
        case "Magenta":
          setStyles("magenta");
      default:
        break;
    }
  }, [selectedColor]);

  return (
    <>
      {isLoading && <div className={classes.loading_screen_div}></div>}
      {isShowing && <CountryModal data={ctData} setIsShowing={setIsShowing} />}
      <ComposableMap width={800} height={500}>
        <ZoomableGroup>
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  className={classes[styles]}
                  onClick={() => setSelectedCountry(geo.properties)}
                  key={geo.rsmKey}
                  geography={geo}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
}
