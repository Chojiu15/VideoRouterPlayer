
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Player from './components/Player'




const MyRouter = () => {
    return(
        <Router>
                <Route path='/' component={Home} />
                <Route exact path='/player/:id' component={Player} />


        </Router>
    )
}

export default MyRouter