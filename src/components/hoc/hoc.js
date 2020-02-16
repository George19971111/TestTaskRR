import React from "react";
import { MyConsumer } from "../context";

const Hoc = () => Wrapper => {
  return props => {
    return (
      <MyConsumer>
        {mainServices => {
          return <Wrapper {...props} mainServices={mainServices} />;
        }}
      </MyConsumer>
    );
  };
};
export default Hoc;
