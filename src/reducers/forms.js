const form = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return action.form;
    case "CREATE_FIELD":
      const fields = [...state.fields, action.fieldId];
      return { ...state, fields };
    case "DELETE_FIELD": {
      const fieldIndex = state.fields.findIndex(
        (fieldId) => fieldId === action.fieldId
      );
      const fields = [
        ...state.fields.slice(0, fieldIndex),
        ...state.fields.slice(fieldIndex + 1),
      ];
      return { ...state, fields };
    }
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
        fields: [],
      };
      return [...state, newForm];
    case "UPDATE_FORM": {
      const index = state.findIndex(
        (form) => form.formId === action.form.formId
      );
      return [
        ...state.slice(0, index),
        form(state[index], action),
        ...state.slice(index + 1),
      ];
    }
    case "DELETE_FORM": {
      return state.filter((form) => form.formId !== action.formId);
    }
    case "CREATE_FIELD": {
      const index = state.findIndex((form) => form.formId === action.formId);
      return [
        ...state.slice(0, index),
        form(state[index], action),
        ...state.slice(index + 1),
      ];
    }
    case "DELETE_FIELD": {
      const formIndex = state.findIndex((form) =>
        form.fields.includes(action.fieldId)
      );
      return [
        ...state.slice(0, formIndex),
        form(state[formIndex], action),
        ...state.slice(formIndex + 1),
      ];
    }
    default:
      return state;
  }
};
