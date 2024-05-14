export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log("Error loading state from session storage:", error);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (error) {
    console.log("Error saving state to session storage:", error);
  }
};
