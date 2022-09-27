import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { items } from "./mock"

const ItemDetails = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [details, setDetails] = useState({})
    const params = useParams()
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(res => res.json())
            .then(res => setDetails(res))
            .then(res => {
                setIsLoading(false)
            })
    }, [params.id])
    
    if(isLoading) {
        return <div>...Loading</div>
    }
    
    return (
        <div>
            <h3>Name: {details.name}</h3>
            <p>Phone: {details.phone}</p>
        </div>
    )    
}

export default ItemDetails