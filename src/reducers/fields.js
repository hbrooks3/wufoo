const default_labels = {
  text: "Untitled",
  number: "Number",
  textarea: "Untitled",
  multiple: "Select a Choice",
  checkboxes: "Check All That Apply",
  dropdown: "Select a Choice",
};

export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_FIELD": {
      const { formId, inputType } = action;
      const newField = {
        fieldId: action.fieldId,
        formId,
        inputType,
        label: default_labels[inputType],
        size: "m",
        placeholder: "",
        predefined: "",
        instructions: "",
        options: {
          required: false,
          noDuplicates: false,
        },
      };
      return [...state, newField];
    }
    case "UPDATE_FIELD": {
      const { fieldId } = action.field;
      const index = state.findIndex((field) => field.fieldId === fieldId);
      return [
        ...state.slice(0, index),
        action.field,
        ...state.slice(index + 1),
      ];
    }
    case "DELETE_FIELD": {
      const index = state.findIndex(
        (field) => field.fieldId === action.fieldId
      );
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case "DELETE_FORM": {
      return state.filter((field) => field.formId !== action.formId);
    }
    default:
      return state;
  }
};
