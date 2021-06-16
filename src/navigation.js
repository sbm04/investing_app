import {Switch,Route,Redirect,BrowserRouter as Router} from 'react-router-dom'
import Details from './details'
import Home from './home'


const Navigation = () => {
    return <Router>
        <Switch>
            <Router path="/" exact component={Home}/>
            <Route path="/details" exact component={Details}/>
        </Switch>
    </Router>
}

export default Navigation