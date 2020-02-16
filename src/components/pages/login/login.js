import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./login.scss";
import Form from "../../forms";
const Login = props => {
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "IS_SESSION" });
    if (session) {
      props.history.push("/success");
    }
  });
  console.log(session);
  return (
    <>
      <Form {...props} />
    </>
  );
};
export default Login;
