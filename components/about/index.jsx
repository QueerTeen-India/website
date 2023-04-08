import Head  from "next/head";

const About = () => {
    let info = [{
        title: "Mission",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. Cras sollicitudin aliquet sapien, et dictum sem auctor a. Mauris quis urna arcu. Mauris a libero tincidunt, venenatis nisl eget, rhoncus tellus. Phasellus fringilla ante libero, ut dictum nisl pretium in. Vivamus quis ipsum convallis, condimentum turpis ac, luctus magna. Nullam convallis quis augue nec sagittis. Vestibulum rutrum mi lobortis tristique interdum. Etiam hendrerit at nisl at dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        images: ['/images/mission2.jpg', '/images/lgbt teens/mission1.jpg']
    },
    {
        title: "Vision",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. Cras sollicitudin aliquet sapien, et dictum sem auctor a. Mauris quis urna arcu. Mauris a libero tincidunt, venenatis nisl eget, rhoncus tellus. Phasellus fringilla ante libero, ut dictum nisl pretium in. Vivamus quis ipsum convallis, condimentum turpis ac, luctus magna. Nullam convallis quis augue nec sagittis. Vestibulum rutrum mi lobortis tristique interdum. Etiam hendrerit at nisl at dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        images: ['/images/vision-2.jpg', '/images/vision2.jpg']
    }
    ]
    let values = [
        ['title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. '],
        ['title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. '],
        ['title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. '], ['title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. '],
        ['title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida molestie accumsan. Duis id mauris et elit aliquam venenatis. Proin a quam nisl. '],

    ]
    let team = [
        ['Lemn', 'Co-Founder', 'mynamelemn@gmail.com', '/team.jpg'],
        ['Lemn', 'Co-Founder', 'mynamelemn@gmail.com', '/team.jpg'],
        ['Lemn', 'Co-Founder', 'mynamelemn@gmail.com', '/team.jpg'],
        ['Lemn', 'Co-Founder', 'mynamelemn@gmail.com', '/team.jpg'],
    ]
    return (<>
        <div className="about">
            <Head>
                <title>About Us</title>
            </Head>
            <div className="about-header">

                <h1>Who we are & What we do</h1>
                <p>We wish to help the queer kids in need and achieve our goals collectively with the...</p>

            </div>
        </div>
        <div className="about-information">
            <img src='/images/about-info.png' className="about-information-bg" alt='bg' />

            {info.map((a, index) => {
                return (<div key={index} className="about-information-each">
                    <h2>{a.title}</h2>
                    <p>{a.description}</p>
                    {index === 0 ?

                        <div className="about-information-each-images">
                            {a.images.map((a, index) => {
                                return <img key={'about-' + index} src={a} alt="" key={index} />
                            })}
                        </div>
                        :
                        <div className="about-information-each-images-vision">
                            {a.images.map((a, index) => {
                                return <img key={'about-' + index} src={a} alt="" key={index} />
                            })}
                        </div>
                    }

                </div>
                )
            })}
        </div>
        <div className="about">

            <div className="about-values">
                <h2>Values</h2>
                <div className="about-values-container">
                    {values.map((a, index) => {
                        return (<div key={'value-' + index} className="about-values-container-each">
                            <h3>{a[0]}</h3>
                            <p>{a[1]}</p>
                        </div>)
                    })}
                </div>
            </div>
            <div className="about-team">
                <h2>Meet the team</h2>
                <div className="about-team-container">
                    {team.map((a, index) => {
                        return (<div key={'team-' + index} className="about-team-container-each">
                            <img src={a[3]} alt={a[1]} />
                            <div className="about-team-container-each-details">
                                <h3>{a[0]}</h3>
                                <p>{a[1]}</p>
                                <p>{a[2]}</p>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>

    </>
    )
}

export default About