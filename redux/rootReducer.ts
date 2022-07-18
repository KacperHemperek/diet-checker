import authReducer from "./features/authData";
import searchReducer from "./features/searchData";
const rootReducer = {
    auth: authReducer,
    search: searchReducer,
};

export default rootReducer;
