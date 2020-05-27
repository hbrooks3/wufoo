export const createForm = (userId) => ({
  type: "CREATE_FORM",
  userId,
});

export const updateForm = (form) => ({
  type: "UPDATE_FORM",
  form,
});

export const createField = (formId, inputType) => ({
  type: "CREATE_FIELD",
  formId,
  inputType,
  fieldId: `field${Date.now()}`,
});

export const updateField = (field) => ({
  type: "UPDATE_FIELD",
  field,
});
