import { Link } from "react-router-dom"

const Member = () => {
    return (
        <div>
            <h1>Members Page</h1>
            <p>Select a member to be shown</p>
            <Link to="/member/John Doe">John Doe</Link> | {' '}
            <Link to="/member/Bambang">Bambang</Link>
        </div>
    )
}

export default Member