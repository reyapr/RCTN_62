import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, fetchUsers, increment } from "./slicer"

const User = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    
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