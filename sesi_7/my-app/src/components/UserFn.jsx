import { useEffect, useState } from "react"
import axios from 'axios'
import UserListFn from "./userListFn"


const UserFn = () => {
    
    const [state, setState] = useState({
        users: [],
        userId: null,
        userDetails: null
    })
    
    useEffect(() => {
        (async () => {
            if(state.userId) {
                const url = `https://jsonplaceholder.typicode.com/users/${state.userId}`
                let res = await axios.get(url)
                setState({
                    ...state,
                    userDetails: res.data
                })
            } else {
                let res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setState({
                    ...state,
                    users: res.data
                })
            }
        })()
        
        return () => {
            console.log('unmount')
        }
    }, [state.userId])
    
    
    const getDetails = (userId) => {
        setState({
            ...state,
            userId
        })
    }
    
    return (
        <div>
            <ul>
                {
                    state.userDetails ? 
                    <>
                        <div>Name: {state.userDetails.name}</div>
                        <div>Email: {state.userDetails.email}</div>
                        <div>phone: {state.userDetails.phone}</div>
                        <button 
                            onClick={
                                () => setState({...state, userDetails: null})
                            }
                        >
                            Back
                        </button>
                    </>
                    :
                    <UserListFn
                        users={state.users} 
                        getDetails={getDetails}
                    />
                }
                
            </ul>
        </div>
    )
}

export default UserFn