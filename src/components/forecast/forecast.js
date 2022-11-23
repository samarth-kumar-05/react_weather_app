import {Accordion,AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";
import './forecast.css'

const WEEK_DAYS = ["Monday","Tuesday","Wednesday","Thursday","friday","Saturday","Sunday"];

const Forecast = ({data}) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInAWeek));

    // console.log(forecastDays);



    return(
        <>
            <label htmlFor="" className="title">Daily Forecast Predictions</label>
            <Accordion allowZeroExpanded>
                
                {data.list.splice(0,7).map((item,idx) => (
                    <AccordionItem key={idx}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item">
                                        <img className="icon-small" src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                                        <label className="day">{forecastDays[idx]}</label>
                                        <label htmlFor="" className="description">{item.weather[0].description}</label>
                                        <label htmlFor="" className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="daily-details-grid">
                                    <div className="daily-details-grid-items">
                                        <label>Pressure</label>
                                        <label>{item.main.pressure} hPa</label>
                                    </div>
                                    <div className="daily-details-grid-items">
                                        <label>Humidity</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="daily-details-grid-items">
                                        <label>Clouds</label>
                                        <label>{item.clouds.all}</label>
                                    </div>
                                    <div className="daily-details-grid-items">
                                        <label>Wind Speed : </label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="daily-details-grid-items">
                                        <label>Sea Level : </label>
                                        <label>{item.main.sea_level} m</label>
                                    </div>
                                    <div className="daily-details-grid-items">
                                        <label>Feels Like : </label>
                                        <label>{Math.round(item.main.feels_like)} °C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;