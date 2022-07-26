import searchReducer from "./features/searchData";
import userReducer from "./features/userData"
const rootReducer = {
    search: searchReducer,
    user: userReducer
};

export default rootReducer;
