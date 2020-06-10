import React from 'react';
import Admin from '../../pages/Admin/index'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class App extends React.Component{
    render(){
        return (
            <Router>
            <div className="App">
                <Route path="/about" component={Admin} />
            </div>
        </Router>
        )
    }
}
export default App