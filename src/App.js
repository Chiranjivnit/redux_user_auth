import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/app" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
