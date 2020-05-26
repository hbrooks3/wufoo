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
    default:
      return state;
  }
};
