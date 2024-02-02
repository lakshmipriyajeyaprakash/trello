import { useState, useEffect } from "react";
import BoardModal from "./BoardModal";
const Workspace = () => {
  /* Board Modal open and close function */
  const [isopendiv, setIsOpenDiv] = useState(false);
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
            <li className="createboardtile">
              <div className="boardadddiv borderImage" onClick={openModal}>
                <p>
                  <span>Create new board</span>
                </p>
                {isopendiv && <BoardModal closeModal={closeModal}></BoardModal>}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Workspace;

