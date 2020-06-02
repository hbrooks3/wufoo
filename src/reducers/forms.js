const single_form = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_FORM": {
      const { form, modified } = action;
      return { ...form, modified };
    }
    case "CREATE_FIELD": {
      const { fieldId, modified } = action;
      const fields = [...state.fields, fieldId];
      return { ...state, fields, modified };
    }
    case "UPDATE_FIELD": {
      const { modified } = action;
      return { ...state, modified };
    }
    case "DELETE_FIELD": {
      const { fieldId, modified } = action;
      const fields = state.fields.filter((field) => field.fieldId !== fieldId);
      return { ...state, fields, modified };
    }
    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_FORM": {
      const { userId, created, modified } = action;
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
        created,
        modified,
      };
      return [...state, newForm];
    }
    case "UPDATE_FORM": {
      const { formId } = action.form;
      return state.map((form) =>
        form.formId === formId ? single_form(form, action) : form
      );
    }
    case "DELETE_FORM": {
      const { formId } = action;
      return state.filter((form) => form.formId !== formId);
    }
    case "CREATE_FIELD": {
      const { formId } = action;
      return state.map((form) =>
        form.formId === formId ? single_form(form, action) : form
      );
    }
    case "UPDATE_FIELD": {
      const { fieldId } = action.field;
      return state.map((form) =>
        form.fields.includes(fieldId) ? single_form(form, action) : form
      );
    }
    case "DELETE_FIELD": {
      const { fieldId } = action;
      return state.map((form) =>
        form.fields.includes(fieldId) ? single_form(form, action) : form
      );
    }
    default:
      return state;
  }
};
