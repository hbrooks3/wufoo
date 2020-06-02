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
      return state.map((field) =>
        field.fieldId === fieldId ? action.field : field
      );
    }
    case "DELETE_FIELD": {
      return state.filter((field) => field.fieldId !== action.fieldId);
    }
    case "DELETE_FORM": {
      return state.filter((field) => field.formId !== action.formId);
    }
    default:
      return state;
  }
};
