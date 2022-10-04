import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, fetchUsers, increment, authLogin } from "./slicer"

const User = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [inputLoginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    
    const handleInputLoginForm = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        setLoginForm({
            ...inputLoginForm,
            [e.target.name]: e.target.value
        })
    }
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    
    if(users.isError) {
        return (
            <div>Something went wrong</div>
        )
    }
    
    return (
        <div>
            <div>
                <div>
                    Email: <input name="email" type="text" onChange={handleInputLoginForm}/>
                </div>
                <div>
                    Password: 
                    <input 
                        name="password" 
                        onChange={handleInputLoginForm}
                        type="password"
                    />
                </div>
                <button onClick={() => dispatch(authLogin(inputLoginForm))}>submit</button>
                <div>
                    { users.login.isLoading && <>...Loading</> }
                    { users.login.errorMessage && !users.login.isLoading && <>{users.login.errorMessage}</>}
                    { users.login.user.email && <>Success</>}
                </div>
            </div>
            <hr />
            <h1>List of User</h1>
            {
                users.isLoading ? 
                    <div>...Loading</div>
                :
                    <div>
                        <h2>Total User: {users.count}</h2>
                        {
                            users.data.map(user => {
                                return (
                                    <div>{user.name}</div>
                                )
                            })
                        }
                        <button onClick={() => dispatch(increment())}>+</button>
                        <button onClick={() => dispatch(decrement())}>-</button>
                    </div>
            }
        </div>
    )
}

export default User