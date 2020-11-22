import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function Clima() {

    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    let getWeather = async (lat, long) => {
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=681115637050382fa8c43f7e70055fde", {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        });
        setWeather(res.data);
        console.log(res.data);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    if (location === false) {
        return (
            <Fragment>
                Você precisa habilitar a localização no browser.
            </Fragment>
        )
    } else if (weather === false) {
        return (
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    } else {
        return (
            <Fragment >
               <div className="d-flex justify-content-center"><h6>Clima atual: {weather['weather'][0]['description']}</h6></div>
                <hr />
                <div className="d-flex justify-content-center">
                <span ><strong>Temperatura atual: </strong>{weather['main']['temp']}º</span>
                    <span>| <strong>Temperatura máxima: </strong>{weather['main']['temp_max']}º</span>
                    <span>| <strong>Temperatura mínima: </strong>{weather['main']['temp_min']}º</span>
                    <span>| <strong>Pressão: </strong>{weather['main']['pressure']} hpa</span>
                    <span>| <strong>Uminade: </strong>{weather['main']['humidity']}%</span>
                </div>
                    
                
            </Fragment>
        )
    }
}



export default Clima;