import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import P from './P.js';
class Principle extends React.Component {
    render(){
        //console.log(88888888888888888)
        return (
            
            <Switch>
                <Route path="/react-code-demo/principle/P">
                    <P />
                </Route>
            </Switch>
            
        );
    }
}

export default Principle