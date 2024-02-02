import Workspace from './Workspace';
const BodyContainer = (
) => {
  return (
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
                      <a href="#" className="Trelloworkspaceanchor">
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
        <Workspace></Workspace>
      </div>
    </div>
  );
};
export default BodyContainer;
