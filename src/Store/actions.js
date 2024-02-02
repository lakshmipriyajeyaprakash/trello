// actions.js
export const setFormValues = (name, value) => ({
    type: "SET_FORM_VALUES",
    payload: { name, value },
  });
  
  export const setBackground = (background) => ({
    type: "SET_BACKGROUND",
    payload: background,
  });
  
  export const setDisplayColor = (displayColor) => ({
    type: "SET_DISPLAY_COLOR",
    payload: displayColor,
  });
  