import { Outlet, Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo iste, enim fugiat velit dolore commodi officia quos laboriosam, saepe adipisci? Ab autem sequi voluptatum neque quos accusantium voluptas iste?</p>
            <Link to='company'>About The Company</Link> | {' '}
            <Link to='me'>About Me</Link> | {' '}
            <Link to='/about/anything'>About Anything</Link>
            <Outlet/>
        </div>
    )
}

export default About