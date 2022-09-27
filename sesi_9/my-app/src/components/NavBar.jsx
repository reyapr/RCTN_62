import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | {' '}
            <Link to="/member">Member</Link> | {' '}
            <Link to="/item">Item</Link>
            {
                localStorage.getItem('token') &&
                <>
                    {' '} | {' '} <button onClick={handleLogout}>Logout</button>
                </>
            }
        </nav>
    )
}

export default NavBar