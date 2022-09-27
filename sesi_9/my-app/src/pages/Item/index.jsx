import { Outlet } from "react-router-dom";
import ItemRow from "./ItemRow";
import { items } from "./mock";

const Item = () => {
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
                    items.map(item => {
                        return (
                            <ItemRow item={item} key={item.id}/>
                        )
                    })
                }
                <Outlet/>
            </table>
        </div>
    )
}

export default Item;