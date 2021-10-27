import React from 'react';
import useAuth from '../hook/useAuth'
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    // if(isLoading){
    //   return  <Spinner animation="border" variant="secondary" />
    // }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user?.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;