import { loginFailure, loginStart, loginSuccess, registerStart,registerSuccess,registerFailure} from "./userRedux";
import { publicRequest , userRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
    await fetchCart(dispatch,res.data._id);
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    console.log(res);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
// API call to localhost:500/api/carts/find/:id
export const fetchCart = async (dispatch,userid) => {
    console.log("called me");
    const currentUser = userid;
    const url = `carts/find/${currentUser}`;

  try {
    const response = await userRequest.get(url);
    // Handle the response data here
    // Call addProduct with the retrieved data
    if(response.data)
    {
    response.data.products.forEach((product) => {
      dispatch(addProduct({ product, apiCall: false }));
    });
    console.log("response for user called"+currentUser);
    }
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
};