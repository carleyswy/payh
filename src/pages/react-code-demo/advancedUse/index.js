import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import N7_15 from './N7_15.js';
class AdvancedUse extends React.Component {
    render(){
        //console.log(88888888888888888)
        return (
            
            <Switch>
                <Route path="/react-code-demo/advancedUse/N7_15">
                    <N7_15 />
                </Route>
            </Switch>
            
        );
    }
}

export default AdvancedUse