import { combineReducers } from "redux";

import forms from "reducers/forms";
import fields from "reducers/fields";

export default combineReducers({
  forms,
  fields,
});
