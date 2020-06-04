import React, { Component } from 'react';
import Form from '../Form';
import PrayerTime from '../PrayerTime';
import SearchBox from '../SearchBox';
import HeadOrbit from '../HeadOrbit';


export default class Index extends Component {
    state = {
        imsak:undefined,
        subuh:undefined,
        terbit:undefined,
        dzuhur:undefined,
        ashar:undefined,
        maghrib:undefined,
        isya:undefined,
        citylist: [],
        citycode: undefined,
        cityname: undefined,
        error:undefined
     }

     updateCityCode = async (e) => {
        e.preventDefault();

        const valueinput = e.target.elements.cityradio.value;
        const splits = valueinput.split("|");

        this.setState({
            citycode: parseInt(splits[0]),
            cityname: splits[1]
        });
        console.log(splits);
        
        console.log(this.state);
        
        
    }

     findCityCode = async (e) => {
         e.preventDefault();

         const cityname = e.target.elements.cityname.value;

         const api_call = await fetch(`https://api.banghasan.com/sholat/format/json/kota/nama/${cityname}`);
         const dataapi = await api_call.json();
         console.log(dataapi.kota);
         
         this.setState({citylist: dataapi.kota});
     }

     getSchedule = async (e) => {
        e.preventDefault();
  
        const citycode = this.state.citycode;
        const date = e.target.elements.date.value;
  
        const api_call = await fetch(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${citycode}/tanggal/${date}`);
        const dataapi = await api_call.json();
  
        if (citycode && date) {
          console.log(dataapi);
          this.setState({
            imsak: dataapi.jadwal.data.imsak,
            subuh: dataapi.jadwal.data.subuh,
            terbit: dataapi.jadwal.data.terbit,
            dzuhur: dataapi.jadwal.data.dzuhur,
            ashar: dataapi.jadwal.data.ashar,
            maghrib: dataapi.jadwal.data.maghrib,
            isya: dataapi.jadwal.data.isya,
            error: dataapi.jadwal.status
          });
          console.log(this.state);
          
        }else{
          this.setState({
            imsak:undefined,
            subuh:undefined,
            terbit:undefined,
            dzuhur:undefined,
            ashar:undefined,
            maghrib:undefined,
            isya:undefined,
            error: 'input the right value'
          })
        }
     };

    render() {
        return (
            <div>
                <HeadOrbit />
                <SearchBox buttonLabel={"Change City"} findCityCode={this.findCityCode} updateCityCode={this.updateCityCode} result={this.state.citylist}/>
                <Form getSchedule={this.getSchedule} />
                <PrayerTime cityname={this.state.cityname}
                            imsak={this.state.imsak}
                            subuh={this.state.subuh}
                            terbit={this.state.terbit}
                            dzuhur={this.state.dzuhur}
                            ashar={this.state.ashar}
                            maghrib={this.state.maghrib}
                            isya={this.state.isya}
                            error={this.state.error} />
            </div>
        )
    }
}
