import { useParams } from "react-router-dom"

const MemberDetails = () => {
    const params = useParams()
    
    return (
        <div>
            <h2>{params.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis obcaecati, culpa vitae eaque aliquam dolor mollitia at molestias corrupti dolore facilis possimus a impedit, recusandae iure doloremque assumenda facere! Totam?</p>
        </div>
    )
}

export default MemberDetails