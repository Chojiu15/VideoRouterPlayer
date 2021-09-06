import ReactPlayer from "react-player"
import {Link} from 'react-router-dom'


const Players = (props) => {
    console.log(props)
    return(
        <div>
            <Link to={`/player/${props.id}`}><li>{props.id}</li></Link>
        </div>
        
    )
}

export default Players