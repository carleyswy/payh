import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import JSXBaseDemo from './JSXBaseDemo.js';
import ConditionDemo from './ConditionDemo.js';
import ListDemo from './ListDemo.js';
import EventDemo from './EventDemo.js';
import FormDemo from './FormDemo.js';
import PropsDemo from './PropsDemo.js';
import StateDemo from './StateDemo.js';
import LifeCycle from './LifeCycle.js';
class BaseUse extends React.Component {
    render(){
        //console.log(88888888888888888)
        return (
            
            <Switch>
                <Route path="/react-code-demo/baseUse/JSXBaseDemo">
                    <JSXBaseDemo />
                </Route>
                <Route path="/react-code-demo/baseUse/ConditionDemo">
                    <ConditionDemo />
                </Route>
                <Route path="/react-code-demo/baseUse/ListDemo">
                    <ListDemo />
                </Route>
                <Route path="/react-code-demo/baseUse/EventDemo">
                    <EventDemo />
                </Route>
                <Route path="/react-code-demo/baseUse/FormDemo">
                    <FormDemo />
                </Route>
                <Route path="/react-code-demo/baseUse/PropsDemo">
                    <PropsDemo />
                </Route>
                <Route path="/react-code-demo/baseUse/StateDemo">
                    <StateDemo />
                </Route>
                <Route path="/react-code-demo/baseUse/LifeCycle">
                    <LifeCycle />
                </Route>
              
            </Switch>
            
        );
    }
}

export default BaseUse