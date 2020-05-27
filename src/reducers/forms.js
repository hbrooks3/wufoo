const form = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_FIELD":
      const fields = [...state.fields, action.fieldId];
      return { ...state, fields };
    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_FORM":
      const { userId } = action;
      const newForm = {
        userId,
        formId: `form${Date.now()}`,
        title: "Untitled Form",
        desc: "This is my form. Please fill it out. It's awesome!",
        titleAlignment: "left",
        descAlignment: "left",
        lang: "English",
        labelPlacement: "top",
      };
      return [...state, newForm];
    case "CREATE_FIELD":
      let index = state.findIndex((form) => form.formId === action.formId);
      return [
        ...state.slice(0, index),
        form(state[index], action),
        ...state.slice(index + 1),
      ];
    case "UPDATE_FORM":
      index = state.findIndex((form) => form.formId === action.form.formId);
      return [
        ...state.slice(0, index),
        form(state[index], action),
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
};
