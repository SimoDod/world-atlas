import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./CountryModal.module.css";

const CountryModal = ({ setIsShowing, data }) => {
  const clickHandler = () => setIsShowing(false);

  if (!data[0]) return;

  const countryName = data[0].name.common;

  /* to fix antarctica */
  if (countryName === "Antarctica") return;
  const officialCountryName = data[0].name.official;
  const region = data[0].region;
  const subregion = data[0].subregion;
  const capital = data[0].capital;
  const population = data[0].population;
  const area = data[0].area;
  const currencyKey = Object.keys(data[0].currencies);
  const currency = data[0].currencies[currencyKey].name;
  const coordinates = data[0].latlng.join(', ');
  const flagImg = data[0].flags.png;
  const bordersArr = data[0].borders.join(", ");

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
            {coordinates}
          </p>
        </main>
      </div>
    </Fragment>
  );
};

export default CountryModal;
