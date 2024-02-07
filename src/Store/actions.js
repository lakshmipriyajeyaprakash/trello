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
  
  export const incrementId = () => ({
    type: "SET_UNIQUE_ID",
  })
  export const addBoardList = (boardList) => ({
    type: "SET_BOARD_LIST",
    payload: boardList,
  })
  
 
  