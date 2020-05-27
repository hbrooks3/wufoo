export const selectForm = (formId) => (state) =>
  state.forms.find((form) => form.formId === formId);

export const selectField = (fieldId) => (state) =>
  state.fields.find((field) => field.fieldId === fieldId);
