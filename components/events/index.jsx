const Events = () => {
    const events = [{
        date: "Fri, 08 Jun",
        place: "500 Terry A Francois Blvd",
        title: "SF Pride Parade",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. Cras sollicitudin aliquet sapien, et dictum sem auctor a. Mauris quis urna arcu. Mauris a libero tincidunt, venenatis nisl eget, rhoncus tellus. Phasellus fringilla ante libero, ut dictum nisl pretium in. Vivamus quis ipsum convallis, condimentum turpis ac, luctus magna. Nullam convallis quis augue nec sagittis. Vestibulum rutrum mi lobortis tristique interdum. Etiam hendrerit at nisl at dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
        image: "/images/pride-parade.jpg"
    },
    {
        date: "Fri, 08 Jun",
        place: "500 Terry A Francois Blvd",
        title: "SF Pride Parade",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. Cras sollicitudin aliquet sapien, et dictum sem auctor a. Mauris quis urna arcu. Mauris a libero tincidunt, venenatis nisl eget, rhoncus tellus. Phasellus fringilla ante libero, ut dictum nisl pretium in. Vivamus quis ipsum convallis, condimentum turpis ac, luctus magna. Nullam convallis quis augue nec sagittis. Vestibulum rutrum mi lobortis tristique interdum. Etiam hendrerit at nisl at dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
        image: "/images/pride-parade.jpg"
    },
    {
        date: "Fri, 08 Jun",
        place: "500 Terry A Francois Blvd",
        title: "SF Pride Parade",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. Cras sollicitudin aliquet sapien, et dictum sem auctor a. Mauris quis urna arcu. Mauris a libero tincidunt, venenatis nisl eget, rhoncus tellus. Phasellus fringilla ante libero, ut dictum nisl pretium in. Vivamus quis ipsum convallis, condimentum turpis ac, luctus magna. Nullam convallis quis augue nec sagittis. Vestibulum rutrum mi lobortis tristique interdum. Etiam hendrerit at nisl at dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
        image: "/images/pride-parade.jpg"
    },
    ]
    return (
        <div className="events">
            <div className="events-header">
                <h1>Upcoming Events</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. Cras sollicitudin aliquet sapien, et dictum sem auctor a. Mauris quis urna arcu. Mauris a libero tincidunt, venenatis nisl eget, rhoncus tellus. Phasellus fringilla ante libero, ut dictum nisl pretium in. Vivamus quis ipsum convallis, condimentum turpis ac, luctus magna. Nullam convallis quis augue nec sagittis. Vestibulum rutrum mi lobortis tristique interdum. Etiam hendrerit at nisl at dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className="events-container">
                {events.map((a, index) => {
                    return (
                        <div key={index} className="events-container-each">
                            <div className="events-container-each-image">
                                <img src={a.image} alt={a.title} />
                            </div>
                            
                            <div className="events-container-each-content">
                                <p className="events-container-each-content-date">{a.date} | {a.place}</p>
                                <h2>{a.title}</h2>
                                <p className="events-container-each-content-description">{a.description}</p>
                                <button className="events-container-each-button">RSVP</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Events;