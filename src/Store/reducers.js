const initialState = {
    formValues: JSON.parse(localStorage.getItem("formValues")) || {
      boardtitle: "Example Board",
      visibility: "Workspace",
    },
    background:
      JSON.parse(localStorage.getItem("background")) ||
      "url(https://images.unsplash.com/photo-1704732510471-5a99789c6123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzA0OTAzNjA3fA&ixlib=rb-4.0.3&q=80&w=400)",
    displayColor: JSON.parse(localStorage.getItem("displayColor")) || "whitesmoke",
    uniqueId: JSON.parse(localStorage.getItem("uniqueId")) || 1,
    boardList: JSON.parse(localStorage.getItem("boardList"))||[],
  };
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FORM_VALUES":
        const updatedFormValues = {
          ...state.formValues,
          [action.payload.name]: action.payload.value,
        };
        localStorage.setItem("formValues", JSON.stringify(updatedFormValues));
        return {
          ...state,
          formValues: updatedFormValues,
        };
  
      case "SET_BACKGROUND":
        localStorage.setItem("background", JSON.stringify(action.payload));
        return { ...state, background: action.payload };
  
      case "SET_DISPLAY_COLOR":
        localStorage.setItem("displayColor", JSON.stringify(action.payload));
        return { ...state, displayColor: action.payload };
      
      case "SET_UNIQUE_ID":
        localStorage.setItem("uniqueId", JSON.stringify(state.uniqueId+1));
        return { ...state, uniqueId: parseInt(state.uniqueId +1) };
      case "SET_BOARD_LIST":
        localStorage.setItem("boardList", JSON.stringify([...state.boardList, action.payload]));
        console.log(state.boardList);
        return {
          ...state,
          boardList: [...state.boardList, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default appReducer;
  