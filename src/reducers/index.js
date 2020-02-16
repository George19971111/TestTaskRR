const initialState = {
  datas: [],
  loader: true,
  validata: false,
  validateMail: false,
  validatePassvord: false,
  session: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADED_ON": {
      localStorage.setItem("jwt", "86fasfgfsogHGad");
      return {
        ...state,
        loader: true,
        session: true
      };
    }
    case "DOM_LOADED":
      return {
        ...state,
        loader: false
      };
    case "VALIDATE_MAIL_SUCCESS":
      return {
        ...state,
        validateMail: true
      };
    case "VALIDATE_PASSWORD_SUCCESS":
      return {
        ...state,
        validatePassvord: true
      };
    case "VALIDATE_MAIL_ERROR":
      return {
        ...state,
        validateMail: false,
        validata: false
      };
    case "VALIDATE_PASSWORD_ERROR":
      return {
        ...state,
        validatePassvord: false,
        validata: false
      };
    case "VALIDATE_ALL": {
      if (state.validateMail && state.validatePassvord) {
        return {
          ...state,
          validata: true
        };
      }
    }
    case "LOG_OUT": {
      localStorage.removeItem("jwt");
      return {
        ...state,
        validata: false
      };
    }
    case "IS_SESSION": {
      if (localStorage.getItem("jwt") !== null) {
        return {
          ...state,
          session: true
        };
      } else {
        return {
          ...state,
          session: false
        };
      }
    }
    default:
      return state;
  }
};
export default reducer;
