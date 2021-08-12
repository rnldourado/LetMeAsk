import { Home } from "./pages/Home";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
        </AuthContextProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
