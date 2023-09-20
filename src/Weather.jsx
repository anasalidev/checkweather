import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'


const Weather = () => {

    const [search, setSearch] = useState("Lahore")
    const [city, setCity] = useState(null)
    const [wind, setWind] = useState(null)
    const [clouds, setclouds] = useState(null)
    const [cloud, setcloud] = useState(null)
    
    
    useEffect(() => {
        const FetchApi = async () => {
            const ur = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&units=meter/UTC&appid=fc198bb8a281b21a1470851b0c53b642`;
            const reas = await fetch(ur);
            const rejon = await reas.json();
            setCity(rejon.main)
            setWind(rejon.wind)
            setclouds(rejon.clouds)
            setcloud(rejon.sys)

        }
        
        FetchApi();
    }, [search]);



    return (
        <>
            <div className="contanier">


                <div className="contanier-content">
                    {/* ============================ */}
                    <div className="lift-box">

                        <div className="box">
                            <div className="input-box">
                                <input
                                    className='inputfiled'
                                    type="search"
                                    value={search}
                                    onChange={(event) => {
                                        setSearch(event.target.value)
                                    }} 
                                />
                                    {/* <img src={iconurl} alt="" /> */}
                            </div>

                            {!city ? (
                                <p className="error">Data Not Found </p>
                            ) : (
                                <>


                                    <div className="info">
                                        <h1 className='temp'>{city.temp} °C </h1>
                                        <hr />
                                    </div>
                                    <div id="box">


                                        <div className="date">
                                            <h2 className='year'> {moment().format('MMM Do YYYY')}</h2>
                                
                                        </div>


                                        <div className="day">
                                            <h2 className='time'>{moment().format('dddd, h:mm a')}

                                            </h2>
                                        </div>
                                    </div>

                                    <div className="city">
                                        <h1 className='loction'>{search}  </h1>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {/* ========================== */}
                    <div className="right-box">
                        <h1 className='head'>today</h1>
                        <>
                            {!city ? (
                                <>
                                    <div className="error-box">
                                        <h1>sorry, something went wrong</h1>
                                        <h3>Date and time: {moment().format('MMM Do YYYY')} {moment().format('dddd, h:mm a')}</h3>
                                    </div>
                                </>
                            ) : (

                                <div className="all-info-boxs">
                                    <div className='bx' id="box-1">
                                        <h2>Wind speed </h2>
                                        <p>{wind.speed} km/h</p>
                                    </div>
                                    <div className='bx' id="box-2">
                                        <h2>humidity </h2>
                                        <p>{city.humidity} %</p>
                                    </div>
                                    <div className='bx' id="box-3">
                                        <h2>Feels like</h2>
                                        <p>{city.feels_like} °C</p>
                                    </div>
                                    <div className='bx' id="box-4">
                                        <h2>Pressure</h2>
                                        <p>{city.pressure} mb </p>
                                    </div>
                                    <div className='bx' id="box-5">
                                        <h2>Temp min</h2>
                                        <p>{city.temp_min} °C </p>
                                    </div>
                                    <div className='bx' id="box-6">
                                        <h2>Temp max</h2>
                                        <p>{city.temp_max} °C </p>
                                    </div>
                                    <div className='bx' id="box-7">
                                        <h2>Rain</h2>
                                        <p>{clouds.all} %</p>
                                    </div>
                                    <div className='bx' id="box-8">
                                        <h2>Sun rise</h2>
                                        <p> {cloud.sunrise / 1000} </p>
                                    </div>
                                    <div className='bx' id="box-9">
                                        <h2>sun set</h2>
                                        <p> {cloud.sunset} </p>
                                    </div>
                                </div>
                            )}
                        </>
                    </div>

                    {/* ================================== */}
                </div>
            </div>

        </>
    )
}

export default Weather;
