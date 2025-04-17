import React from 'react';
import { Link } from 'react-router-dom'

const SingleEventTwo = (props) => {
	const { eventClass, eventID, eventImg, eventDayCount, eventDate, eventTitle, eventLocation } = props;
	return(
        <div class={eventClass ? eventClass : 'event__card'}>
            <div class="case-img">
                <img src={require(`../../assets/images/event/${eventImg}`)} alt={eventTitle} />
            </div>
            <div class="event__card--content">
                <div class="event__card--content-area">
                    <div class="event__card--date">{eventDayCount} {eventDate}</div>
                    <h3 class="event__card--title"><Link to={`/event/${eventID}`}>{eventTitle}</Link></h3>
                    <div class="event_location"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {eventLocation}</div>
                </div>
            </div>
        </div>
	)
}

export default SingleEventTwo