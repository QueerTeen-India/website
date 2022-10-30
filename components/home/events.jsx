import Image from "next/image";

import Link from "next/link";
const Events = () => {
    let events = [
        {
            date: ['09', 'Fri', 'Jun'],
            name: "SF Pride Parade",
            venue: '500 Terry A Francois Blvd'
        },

        {
            date: ['09', 'Fri', 'Jun'],
            name: "SF Pride Parade",
            venue: '500 Terry A Francois Blvd'
        },
        {
            date: ['09', 'Fri', 'Jun'],
            name: "SF Pride Parade",
            venue: '500 Terry A Francois Blvd'
        }
    ]
    return (
        <div className="home-events">
            <div className="home-events-header">
                <h2>Events</h2>
                <Link href="/about" style={{ textDecoration: 'none' }} >
                    <p className="home-events-link">
                        See More
                    </p>
                </Link>
            </div>
            <div className="home-events-container">
                {events.map((e, index) => {
                    return (<div key={index} className="home-events-container-each">
                        <div className="home-events-container-each-content-container">
                            <div className="home-events-container-each-date">
                                <h4>{e.date[0]}</h4>
                                <div>
                                    <p>{e.date[1]}</p>
                                    <p>{e.date[2]}</p>
                                </div>
                            </div>
                            <div className="home-events-container-each-content">
                                <h3>{e.name}/</h3><h5>{e.venue}</h5>
                            </div>
                        </div>
                        <div className="home-events-container-each-link">
                            <Link href="/rsvp" style={{ textDecoration: 'none' }} >
                                <p className="home-events-link" style={{ backgroundColor: "#794577" }}>
                                    RSVP
                                </p>
                            </Link>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Events