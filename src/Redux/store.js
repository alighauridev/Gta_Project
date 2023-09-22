import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetialReducer,
  productReducer,
} from "./reducers/productRoducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetials: productDetialReducer,
  user: userReducer,
});

const intialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
