import { useLocation, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location.state?.from?.pathname || '/'
    
    const handleLogin = () => {
        localStorage.setItem('token', 'login')
        navigate(from, {replace: true})
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <p>Click To Login</p>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default Login