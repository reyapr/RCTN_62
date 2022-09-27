import { useParams } from "react-router-dom"
import { items } from "./mock"

const ItemDetails = () => {
    const params = useParams()
    let details = items.find(item => item.id == params.id)
    return (
        <div>
            <h3>{details.name}</h3>
            <p>Power: {details.power}</p>
        </div>
    )    
}

export default ItemDetails