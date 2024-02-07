import { useState, useEffect } from "react";
import BoardModal from "./BoardModal";

import {useSelector } from "react-redux";
const Workspace = () => {
  /* Board Modal open and close function */
  const [isopendiv, setIsOpenDiv] = useState(false);
  

  /* Fetching BoardList Values */
  const boardlist = useSelector((state) => state.boardList);
  console.log(boardlist.length);
  
 /* const handleboardlist = () => {
    
}*/
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isopendiv) {
        const modal = document.querySelector(".boardmodal-content");
        const headermodal = document.querySelector(".closemodalbutton");
        console.log(modal);
        console.log(modal.contains(event.target));
        if (
          modal &&
          (!modal.contains(event.target) || headermodal.contains(event.target))
        ) {
          closeModal();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isopendiv]);
  const openModal = () => {
    setIsOpenDiv(true);
  };
  const closeModal = () => {
    setIsOpenDiv(false);
  };
  return (
    <div className="workspacetilediv">
      <h3 className="workspaceheader">Workspaces</h3>
      <div className="workspaceitemsdiv">
        <div className="workspacemenudiv"></div>
        <div className="addboardinfodiv">
          <ul className="workspacecreateboard">
          {boardlist.map((boardvalue, index) => (
                <li
                  key={index}
                  className="workspace1"
                  style={{
                    backgroundImage: boardvalue.boardbackground,
                    backgroundColor: boardvalue.boardcolor,
                  }}
                >
                  <h3>{boardvalue.boardtitledata}</h3>
                </li>
              ))}
            <li className="createboardtile">
              <div className="boardadddiv borderImage" onClick={openModal}>
                <p>
                  <span>Create new board</span>
                </p>
                {isopendiv && <BoardModal closeModal={closeModal} /*handleboardlist={handleboardlist}*/></BoardModal>}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Workspace;

