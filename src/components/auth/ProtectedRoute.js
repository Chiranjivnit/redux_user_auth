import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({
    component: Component,
    ...rest
  }) => {
    const globalStore = useSelector(state=>state.AuthReducer)
    return (
      <Route
        {...rest}
        render={props => {
          if (globalStore && globalStore.user && globalStore.user[0]) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
      // <>
      //  <h1>hello</h1>
      // </>
    );
  };