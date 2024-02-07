import React, { useState } from "react";
import { Button } from "./StyledComponents";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Board = () => {
  /* List Form */
  const [isformtile, setIsFormTile] = useState(false);
  const [istextArea, setIsTextArea] = useState(false);
  
  const changeformtile = () => {
    setIsFormTile(true);
  };

  /* Fetching Create Board Form Values */
  const formdata = useSelector((state) => state.formValues);
  const backgrounddata = useSelector((state) => state.background);
  const displaycolordata = useSelector((state) => state.displayColor);

  /* List creation */
  const [lists, setLists] = useState([]);
  const [listCount, setListCount] = useState(1);
  const [cardCount, setCardCount] = useState(1);
  const [newListTitle, setNewListTitle] = useState("");
 
  const handleNewListChange = (e) => {
    setNewListTitle(e.target.value);
  };

  const addCardToList = (index, newCardDetails) => {
    setCardCount((prevCardCount) => prevCardCount + 1);
    const changedListDetails = lists[index];
    if (newCardDetails.trim() !== "") {
      const newCardList = {
        id: cardCount,
        cardName: newCardDetails,
      };
      changedListDetails.cards.push(newCardList);
      setLists([...lists]);
    }
  };

  const handleAddList = () => {
    setListCount((prevlistCount) => prevlistCount + 1);
    if (newListTitle.trim() !== "") {
      const newList = {
        id: listCount,
        title: newListTitle,
        cards: [],
      };
      setLists([...lists, newList]);
      setNewListTitle("");
    }
    setIsFormTile(false);
  };
  const handletextareaclick = () => {
    setIsTextArea(true);
  };
  const handleTextareaBlur = (index) => {
    // Exiting textarea mode when clicking outside the textarea or pressing Enter
    setIsTextArea(false);
    // Update the title in the lists array with the edited title
    const updatedLists = [...lists];
    if (newListTitle.trim() !== "") {
      updatedLists[index].title = newListTitle;
    }
    setLists(updatedLists);
  };

  const onDragEnd=(result)=>{
    const source = result.source;
    const destination = result.destination;
  if(destination !==null){
    if(source.droppableId==="Categories"){
      //Just rearrange
      const arrCopy = [...lists];
      const [removed] = arrCopy.splice(source.index, 1);
      arrCopy.splice(destination.index, 0, removed);
      setLists(arrCopy);
    } else {
      const arrCopy = [...lists];
      const arraySourceIndex = parseInt(source.droppableId);
      const [removed] = arrCopy[arraySourceIndex].cards.splice(source.index, 1);
      const arrayDesIndex = parseInt(destination.droppableId);
      arrCopy[arrayDesIndex].cards.splice(destination.index, 0, removed);
      setLists(arrCopy);
    }
    
  }
    };

  return (
    <div>
      <div
        className="trellocontainer"
        style={{
          backgroundImage: backgrounddata,
          backgroundColor: displaycolordata,
        }}
      >
        <div className="trellospacingouter">
          <div className="boardtrelloouterdiv">
            <div className="trellosurface">
              <div className="headerouter">
                <div className="navheaderdiv">
                  <div className="navbar">
                    <Button className="navbutton">
                      <span className="menuimgdivouter fontfamily">
                        <span className="menuimgdiv">
                          <svg
                            width="24"
                            height="24"
                            role="presentation"
                            focusable="false"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </Button>
                    <a href="#" className="anchordiv">
                      <div className="logoouterdiv">
                        <div className="logoinnerdiv">
                          <svg
                            width="24"
                            height="24"
                            role="presentation"
                            focusable="false"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div className="title">Trello</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="maincontainer">
                <div className="maincontaineralignouter">
                  <div className="menunavouter">
                    <div className="menunavitemsouterdiv">
                      <div className="menunavitemsinnerdiv">
                        <div className="menunavbar">
                          <div className="trelloworkspaceouter">
                            <div className="menuanchor">
                              <div className="Touterdiv">
                                <div className="Tdiv">T</div>
                              </div>
                            </div>
                            <div className="Ttitleouterdiv">
                              <span className="Ttextspan">
                                <a className="Trelloworkspaceanchor">
                                  <p className="Trelloworkspacecontent">
                                    Trello Workspace
                                  </p>
                                </a>
                              </span>
                              <p className="usagetype">Free</p>
                            </div>
                          </div>
                          <div className="menuoptiondiv">
                            <div className="boardlistoptiondivouter">
                              <div className="boardlistoptiondivinner">
                                <div className="boardanchor">
                                  <span className="boardiconouterdiv">
                                    <span className="boardicondiv">
                                      <svg
                                        width="16"
                                        height="16"
                                        role="presentation"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                  <p className="boardtext">Boards</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="boardcontainerouter">
                    <div className="boardcontainer">
                      <span className="boardspan">
                        <div className="boardouterdiv">
                          <h1 className="boardheading">
                            {formdata.boardtitle}
                          </h1>
                        </div>
                        <button className="starbuttonouter fontfamily borderImage">
                          <span className="starbuttonspan fontfamily">
                            <span className="stariconspan fontfamily">
                              <svg
                                width="16"
                                height="16"
                                role="presentation"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.49495 20.995L11.9999 18.6266L16.5049 20.995C16.8059 21.1533 17.1507 21.2079 17.4859 21.1504C18.3276 21.006 18.893 20.2066 18.7486 19.3649L17.8882 14.3485L21.5328 10.7959C21.7763 10.5585 21.9348 10.2475 21.9837 9.91094C22.1065 9.06576 21.5209 8.28106 20.6758 8.15825L15.6391 7.42637L13.3866 2.86236C13.2361 2.55739 12.9892 2.31054 12.6843 2.16003C11.9184 1.78206 10.9912 2.0965 10.6132 2.86236L8.36072 7.42637L3.32403 8.15825C2.98747 8.20715 2.67643 8.36564 2.43904 8.60917C1.84291 9.22074 1.85542 10.1998 2.46699 10.7959L6.11158 14.3485L5.25121 19.3649C5.19372 19.7 5.24833 20.0448 5.40658 20.3459C5.80401 21.1018 6.739 21.3924 7.49495 20.995ZM19.3457 10.0485L15.6728 13.6287L16.5398 18.684L11.9999 16.2972L7.45995 18.684L8.327 13.6287L4.65411 10.0485L9.72993 9.31093L11.9999 4.71146L14.2699 9.31093L19.3457 10.0485Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </button>
                        <span className="visibilitychangeouter">
                          <div className="visibilitychangediv">
                            <Button className="visibilitychangebutton">
                              <span className="visibilitychangespan fontfamily">
                                <span className="visibilityspan fontfamily">
                                  <svg
                                    width="16"
                                    height="16"
                                    role="presentation"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12.5048 5.67168C11.9099 5.32669 11.2374 5.10082 10.5198 5.0267C11.2076 3.81639 12.5085 3 14 3C16.2092 3 18 4.79086 18 7C18 7.99184 17.639 8.89936 17.0413 9.59835C19.9512 10.7953 22 13.6584 22 17C22 17.5523 21.5523 18 21 18H18.777C18.6179 17.2987 18.3768 16.6285 18.0645 16H19.917C19.4892 13.4497 17.4525 11.445 14.8863 11.065C14.9608 10.7218 15 10.3655 15 10C15 9.58908 14.9504 9.18974 14.857 8.80763C15.5328 8.48668 16 7.79791 16 7C16 5.89543 15.1046 5 14 5C13.4053 5 12.8711 5.25961 12.5048 5.67168ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM14 10C14 10.9918 13.639 11.8994 13.0412 12.5984C15.9512 13.7953 18 16.6584 18 20C18 20.5523 17.5523 21 17 21H3C2.44772 21 2 20.5523 2 20C2 16.6584 4.04879 13.7953 6.95875 12.5984C6.36099 11.8994 6 10.9918 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM9.99999 14C12.973 14 15.441 16.1623 15.917 19H4.08295C4.55902 16.1623 7.02699 14 9.99999 14Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </Button>
                          </div>
                        </span>
                        <div className="boardnotifyouter">
                          <div className="boardnotifyinner">
                            <div></div>
                            <div className="boardnotifybutton">
                              <button className="boardselectbutton borderImage fontfamily">
                                <span className="boardiconouter fontfamily">
                                  <span className="boardiconinner fontfamily">
                                    <svg
                                      width="16"
                                      height="16"
                                      role="presentation"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </span>
                                <div className="boardspan">
                                  <span>Board</span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                    <div className="mainboardouterdiv">
                      <div className="boardviewcontainer"></div>
                      <DragDropContext onDragEnd={onDragEnd}>
                      <div className="boardlistcontainer">
                      <Droppable droppableId="Categories" type="droppableItem">
                          {(provided) => (
                        <ol ref={provided.innerRef} className="boardliststyle">

                          {lists.map((list, index) => (
                             <Draggable
                             draggableId={`category-${list.id}`}
                             key={`category-${list.id}`}
                             index={index}
                           >
                             {(parentProvider) => (
                              
                            <li ref={parentProvider.innerRef}
                            {...parentProvider.draggableProps} className="taskliststyle" key={index}>
                               <Droppable droppableId={index.toString()}>
                          {(provided) => (
                              <div  ref={provided.innerRef} className="innerTasklistouter">
                                <div {...parentProvider.dragHandleProps} className="tasktileheader">
                                  <div
                                    className="taskheading"
                                    onClick={handletextareaclick}
                                  >
                                    {!istextArea ? (
                                      <h2 className="listheading">
                                        {list.title}
                                      </h2>
                                    ) : (
                                      <textarea
                                        className="listheadingtextareafocused"
                                        onChange={handleNewListChange}
                                        onBlur={() => handleTextareaBlur(index)}
                                        onKeyDown={(event) => {
                                          if (event.key === "Enter") {
                                            handleTextareaBlur(index);
                                          }
                                        }}
                                        dir="auto"
                                        maxLength="512"
                                        spellCheck="false"
                                      >
                                        {list.title}
                                      </textarea>
                                    )}
                                  </div>
                                  <button className="listmenubutton borderImage fontfamily">
                                    <span className="listmenuspanouter fontfamily">
                                      <span className="listmenuspaninner fontfamily">
                                        <svg
                                          width="16"
                                          height="16"
                                          role="presentation"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </span>
                                  </button>
                                  <div className="taskbodydivspacing"></div>
                                </div>
                                <TaskList
                                  listIndex={index}
                                  addCardToList={addCardToList}
                                  listDetail={list}
                                ></TaskList>
                                {provided.placeholder}
                              </div>
                              )}
                              </Droppable>
                            </li>
                             )}
                             </Draggable>
                          ))}
                          <div className="listtilestyle">
                            {!isformtile ? (
                              <button
                                className="addlistbutton borderImage fontfamily"
                                onClick={changeformtile}
                              >
                                <span className="addlisticonouter fontfamily">
                                  <span className="addlisticon">
                                    <svg
                                      width="16"
                                      height="16"
                                      role="presentation"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </span>
                                Add a list
                              </button>
                            ) : (
                              <div className="listformcontainer">
                                <form className="boardmainlistform borderImage">
                                  <textarea
                                    className="boardlisttitle borderImage"
                                    placeholder="Enter list title..."
                                    value={newListTitle}
                                    onChange={handleNewListChange}
                                  ></textarea>
                                  <div className="addtaskbuttondiv">
                                    <button
                                      className="addtaskbutton"
                                      onClick={handleAddList}
                                    >
                                      Add List
                                    </button>

                                    <Button className="closelistbutton">
                                      <span className="closesymbolspan fontfamily">
                                        <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </Button>
                                  </div>
                                </form>
                              </div>
                            )}
                          </div>
                          {provided.placeholder}
                        </ol>
                        )}
                        </Droppable>
                      </div>
                      </DragDropContext>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Board;
