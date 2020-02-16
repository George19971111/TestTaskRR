import React, { useState } from "react";
import "./form.scss";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "./img/Group.png";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
// import axios from "axios";
const Form = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const validata = useSelector(state => state.validata);
  const [alertError, setalertError] = useState(false);
  const [maildate, setmaildate] = useState({
    text: "",
    isError: false,
    helpeError: ""
  });
  const [password, setpassword] = useState({
    password: "",
    isError: false,
    helpeError: ""
  });
  const changeData = e => {
    setmaildate({ text: e.target.value });
    if (
      e.target.value.length < 15 ||
      !e.target.value.match(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )
    ) {
      setmaildate({
        text: e.target.value,
        isError: true,
        helpeError: "Используйте @,.,(...mail...) и более 10 символов"
      });
      dispatch({ type: "VALIDATE_MAIL_ERROR" });
    } else {
      dispatch({ type: "VALIDATE_MAIL_SUCCESS" });
      dispatch({ type: "VALIDATE_ALL" });
    }
  };
  const changePass = e => {
    setpassword({ password: e.target.value });
    if (!e.target.value.match(/^(?=.*\d+)(?=.*[A-Z])(?=.*[a-z])\S{6,35}$/gm)) {
      setpassword({
        password: e.target.value,
        isError: true,
        helpeError: "Используйте UpperCase, [1,9], более 6 символов"
      });
      dispatch({ type: "VALIDATE_PASSWORD_ERROR" });
    } else {
      dispatch({ type: "VALIDATE_PASSWORD_SUCCESS" });
      dispatch({ type: "VALIDATE_ALL" });
    }
  };
  const submit = () => {
    if (validata) {
      props.history.push("/success");
      dispatch({ type: "LOADED_ON" });
      // axios.post("url", { email: maildate.text, pass: password.password })
      // .then(response=>{
      //   dispatch({ type: "LOADED_ON", payload:response.data.token });
      // })
      // .catch(error=>{
      //   dispatch({ type: "NO_USER_INFO"});
      // })
    } else {
      setalertError(true)
    }
  };
  return (
    <>
      <Alert severity="error" className={alertError ? classes.rootVisiable : classes.rootInvisable}>
        Вы неправильно заполнили одно или несколько полей входа
      </Alert>
      <form className="form-control">
        <img src={Icon} alt="" />
        <p className="title">Вход в аккаунт</p>
        <TextField
          error={maildate.isError}
          className={`${classes.rootEmail} ${classes.rootMargin}`}
          label="Почта*"
          value={maildate.text}
          helperText={maildate.helpeError}
          onChange={e => changeData(e)}
          variant="outlined"
        />
        <TextField
          className={`${classes.rootEmail} ${classes.rootMarginPas}`}
          error={password.isError}
          label="Пароль*"
          value={password.password}
          name="password"
          type="password"
          onChange={e => changePass(e)}
          helperText={password.helpeError}
          variant="outlined"
        />
        <div className="check_former">
          <FormControlLabel
            className={classes.rootFLabel}
            control={<Checkbox color="primary" />}
            label="Запомнить меня"
          />
        </div>
        <Button onClick={() => submit()} className={classes.rootButton}>
          Войти в аккаунт
        </Button>
        <div className="block_helper">
          <a href="/">Забыли пароль?</a>
          <a href="/">Ещё нет аккаунта? Регистрация</a>
        </div>
        <p className="footer">Copyright© Ваш сайт 2020.</p>
      </form>
    </>
  );
};
const useStyles = makeStyles({
  rootInvisable:{
    display:'none'
  },
  rootVisiable:{
    display:'flex'
  },
  rootEmail: {
    width: "380px",
    maxWidth: "100%",
    height: "56px",
    transition: "all .5s ease",
    "& input": {
      fontFamily: "Roboto-Regular",
      fontSize: " 16px"
    }
  },
  rootMargin: {
    marginTop: "29px"
  },
  rootMarginPas: {
    marginTop: "27px"
  },
  rootFLabel: {
    fontFamily: "Roboto-Regular",
    fontSize: " 16px",
    color: "rgba(0, 0, 0, 0.87)"
  },
  rootButton: {
    width: "380px",
    maxWidth: "100%",
    height: "38px",
    background: " #2196F3",
    borderRadius: " 4px",
    marginTop: "15px",
    textTransform: "none",
    color: "#fff",
    fontSize: "14px",
    letterSpacing: "0.15px",
    boxShadow:
      "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
    "&:hover": {
      background: "#2F80ED"
    }
  }
});
export default Form;
