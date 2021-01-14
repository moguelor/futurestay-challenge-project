import React from "react";
import { Route } from "react-router-dom";
import { EmptyLayout } from "@components/layouts";

const LayoutRoute = ({
  component: Component,
  layout: Layout = EmptyLayout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout {...rest}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default LayoutRoute;
