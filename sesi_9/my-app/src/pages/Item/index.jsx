import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ItemRow from "./ItemRow";
import { items } from "./mock";

const Item = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                setUsers(res)
            })
    }, [])
    return (
        <div>
            <h1>Items Page</h1>
            <p>Select an item to be shown</p>
            <table style={{ margin: 'auto' }}>
                <tr>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
                {
                    users.map(user => {
                        return (
                            <ItemRow item={user} key={user.id}/>
                        )
                    })
                }
                <Outlet/>
            </table>
        </div>
    )
}

export default Item;