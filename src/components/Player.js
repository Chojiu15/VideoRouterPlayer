import ReactPlayer from "react-player"
import data from '../data'


const Player = (props) => {
    console.log(props)

    const video = data.filter(element => element.id === parseInt(props.match.params.id))
    console.log(video)
    return(
        <div >
            <ReactPlayer height='360px' width='640px' controls url={video[0].url} />
        </div>
    )
}

export default Player