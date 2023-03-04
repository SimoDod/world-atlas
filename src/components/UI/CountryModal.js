import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./CountryModal.module.css";

const CountryModal = ({ setIsShowing, data }) => {
  const [countryName, setCountryName] = useState("Not specified");
  const [currency, setCurrency] = useState("Not specified");
  const [officialCountryName, setOfficialCountryName] =
    useState("Not specified");
  const [region, setRegion] = useState("Not specified");
  const [subregion, setSubregion] = useState("Not specified");
  const [capital, setCapital] = useState("Not specified");
  const [area, setArea] = useState("Not specified");
  const [coordinates, setCoordinates] = useState("Not specified");
  const [flagImg, setFlagImg] = useState("Not specified");
  const [population, setPopulation] = useState("Not specified");
  const [bordersArr, setBordersArr] = useState("None");

  const clickHandler = () => setIsShowing(false);

  useEffect(() => {
    const getData = () => {
      setCountryName(data[0].name.common);
      setOfficialCountryName(data[0].name.official);
      setRegion(data[0].region);
      setSubregion(data[0].subregion);
      setCapital(data[0].capital);
      setPopulation(data[0].population);
      setArea(data[0].area);
      setCoordinates(data[0].latlng);
      setFlagImg(data[0].flags.png);

      if (data[0].borders) {
        setBordersArr(data[0].borders.join(", "));
      }

      if (data[0].currencies) {
        const currencyKey = Object.keys(data[0].currencies);
        setCurrency(data[0].currencies[currencyKey].name);
      }
    };

    if (data.length > 0) {
      getData();
    }
  }, [data]);

  return (
    <Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{countryName}</h2>
          <div className={classes.close_icon}>
            <FontAwesomeIcon
              onClick={clickHandler}
              icon={faCircleXmark}
            ></FontAwesomeIcon>
          </div>
        </header>
        <main className={classes.content}>
          <div className={classes.modal_img}>
            <img src={flagImg} alt="img"></img>
          </div>
          <hr></hr>
          <p className={classes.info_line}>
            <span className={classes.span}>Official name: </span>
            {officialCountryName}
          </p>
          <hr></hr>
          <p className={classes.info_line}>
            <span className={classes.span}>Region: </span>
            {region}
          </p>
          <p className={classes.info_line}>
            <span className={classes.span}>Subregion: </span>
            {subregion}
          </p>
          <hr></hr>
          <p className={classes.info_line}>
            <span className={classes.span}>Capital: </span>
            {capital}
          </p>
          <p className={classes.info_line}>
            <span className={classes.span}>Population: </span>
            {population}
          </p>
          <p className={classes.info_line}>
            <span className={classes.span}>Area: </span>
            {area} km2
          </p>
          <p className={classes.info_line}>
            <span className={classes.span}>Currency: </span>
            {currency}
          </p>
          <hr></hr>
          <p className={classes.info_line}>
            <span className={classes.span}>Borders: </span>
            {bordersArr}
          </p>
          <p className={classes.info_line}>
            <span className={classes.span}>Coordinates: </span>
            Latitude: {coordinates[0]} / Longitude: {coordinates[1]}
          </p>
        </main>
      </div>
    </Fragment>
  );
};

export default CountryModal;
