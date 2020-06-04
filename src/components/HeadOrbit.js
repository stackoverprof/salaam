import React from 'react';
import Day from '../img/DayOrbit.svg'

const HeadOrbit = props => (
  <div>
    <img className="head-orbit-img" src={Day} alt=""/>

    <style jsx global>
      {`
        .head-orbit-img{
          
        }
      `}
    </style>
  </div>
);

export default HeadOrbit;
