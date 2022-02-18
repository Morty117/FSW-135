export default function Issues({title, issue, imgUrl, _id}){
    
    return(
        <div className="issue">
            <img src={imgUrl} alt={imgUrl} width={400} height={300}/>
            <h2>{ title }</h2>
            <p>{ issue }</p>
        </div>
    )
}