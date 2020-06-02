// forms

export const createForm = (userId) => ({
  type: "CREATE_FORM",
  userId,
  modified: Date.now(),
  created: Date.now(),
});

export const updateForm = (form) => ({
  type: "UPDATE_FORM",
  form,
  modified: Date.now(),
});

export const deleteForm = (formId) => ({
  type: "DELETE_FORM",
  formId,
});

// fields

export const createField = (formId, inputType) => ({
  type: "CREATE_FIELD",
  formId,
  inputType,
  fieldId: `field${Date.now()}`,
  modified: Date.now(),
});

export const updateField = (field) => ({
  type: "UPDATE_FIELD",
  field,
  modified: Date.now(),
});

export const deleteField = (fieldId) => ({
  type: "DELETE_FIELD",
  fieldId,
  modified: Date.now(),
});
