export default function Japan(props){
    return(
        <>
        <div id="jap">
        <div id="japimage">
            <img src={props.img.src}/>
        </div>
        <div id="content">
        <div id="top">
            <img src="./src/locationicon.jpg"/>
            <p>{props.country}</p>
            <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>
            <h1>{props.title}</h1>
            <h3>{props.dates}</h3>
        <div id="desc">
            <p>
                {props.text}
            </p>
        </div>
        </div>
        </div>
        </>
    )
}