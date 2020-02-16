import React, { Suspense, useEffect } from "react";
import Spiner from "../spiner";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
const Tag = React.lazy(() => import("../tag"));
const Success = props => {
  console.log(props);
  const classes = useStyles();
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "IS_SESSION" });
    if (!session) {
      props.history.push("/");
    }
  });
  const submitt = () => {
    dispatch({ type: "LOG_OUT" });
    props.history.push("/");
  };
  return (
    <>
      <Suspense fallback={<Spiner />}>
        <Tag />
        <Button
          onClick={() => {
            submitt();
          }}
          className={classes.root}
        >
          LogOUT
        </Button>
      </Suspense>
    </>
  );
};
const useStyles = makeStyles({
  root: {
    background: "red"
  }
});
export default Success;
