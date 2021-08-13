

import {Switch, Route} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
function App() {
  return (
   <Switch>
     <Route exact path='/' component={Welcome} />
     <Route exact path="/Myaccount" component={Dashboard} />
   </Switch>
   
  );
}

export default App;
