export const selectForm = (formId) => (state) =>
  state.forms.find((form) => form.formId === formId);

export const selectFields = (formId) => (state) =>
  state.fields.filter((field) => field.formId === formId);
