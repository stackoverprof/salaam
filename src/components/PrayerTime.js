import React from 'react'

const PrayerTime = props => (
  <div>
    { props.cityname && <h2> {props.cityname} </h2>}
    { props.imsak && <p> Imsak: {props.imsak} </p>}
    { props.subuh && <p> Subuh: {props.subuh} </p>}
    { props.terbit && <p> Terbit: {props.terbit} </p>}
    { props.dzuhur && <p> Dzuhur: {props.dzuhur} </p>}
    { props.ashar && <p> Ashar: {props.ashar} </p>}
    { props.maghrib && <p> Maghrib: {props.maghrib} </p>}
    { props.isya && <p> Isya: {props.isya} </p>}
    { props.error !== 'ok' && <p> {props.error} </p>}
  </div>
  )
export default PrayerTime;
