const default_labels = {
  text: "Untitiled",
  number: "Number",
  textarea: "Untitled",
  multiple: "Select a Choice",
  checkboxes: "Check All That Apply",
  dropdown: "Select a Choice",
};

export default (state = [], action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      const { fieldId } = action.field;
      const index = state.findIndex((field) => field.fieldId === fieldId);
      return [
        ...state.slice(0, index),
        action.field,
        ...state.slice(index + 1),
      ];
    case "CREATE_FIELD":
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
    default:
      return state;
  }
};
