import { Redirect, Route } from "react-router-dom";
import { useUser } from "../../context/UserCtx";


function PrivateRoute({ children, ...rest}) {
  const { user } = useUser();

  return (
    <Route {...rest} render={({ location }) => user.id ? (children) 
    : 
    <Redirect to={{pathname: '/login', state: {from: location}}} />
      }
    />
  )
}

export default PrivateRoute;