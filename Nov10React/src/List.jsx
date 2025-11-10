export default function List({data}){
    return (
        <ul>
            {data.map(country=>(
                <li key={country}>{country}</li>
            ))}
        </ul>
    )
}