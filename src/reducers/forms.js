export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_POST":
      const { userId } = action;
      console.log(`Creating post for ${userId}`);
      return state;
    default:
      return state;
  }
};
