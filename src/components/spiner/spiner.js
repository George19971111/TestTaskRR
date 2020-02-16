import React from "react";
import "./spiner.scss";
import { CircularProgress } from "@material-ui/core";

const Spiner = () => {
  return (
    <>
      <div className='loading__helper'>
        <CircularProgress disableShrink color="secondary" />
      </div>
    </>
  );
};
export default Spiner;
