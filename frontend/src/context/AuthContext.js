import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useReducer } from "react";

// Function to decode the token and get the user
const decodeUser = (token) => {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    console.log(decoded.user);
    return decoded.user;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

// Initialize state with decoded user if token exists
const token = localStorage.getItem("token");
const INITIAL_STATE = {
  user: token ? decodeUser(token) : null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

// Reducer function to manage state
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SUCCESS":
      return {
        user: decodeUser(action.payload),
        loading: false,
        error: null,
      };
    case "FAILURE":
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    case "PRE_BOOK":
      return {
        ...state,
        user: {
          ...state.user,
          prebook: action.payload.prebook || [],
        },
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    if (state.user) {
        const token = localStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          const currentTime=Date.now()/1000
          console.log(currentTime)
          const expiresIn=decoded.exp-currentTime;
          console.log(expiresIn)
          const timeoutId=setTimeout(()=>{
            dispatch({type:"LOGOUT"});
            localStorage.removeItem("token");
            console.log("token removed")
          },expiresIn*1000)

       return ()=>clearTimeout(timeoutId)
        }
    } else {
     localStorage.removeItem("token");
    }
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
