import React from 'react';
//import Admin from '../../pages/Admin/index'
import loadable from '@loadable/component';
const OtherComponent = loadable(() => import('../../pages/Admin/index'), {
    fallback: <div>Loading...</div>,
  });
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class App extends React.Component{
    render(){
        const products = {
            product: {
                code: "1a",
                name: "bao viet"
            }
        }
        return (
            <Router>
            <div className="App">
                <Route path="/about" component={OtherComponent} />
            </div>
        </Router>
        )
    }
}
export default App