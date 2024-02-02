import { Button } from "./StyledComponents";
import BoardImage from "../../src/assets/board.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormValues,
  setBackground,
  setDisplayColor,
} from "../../src/Store/actions.js";
const BoardModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const formdata = useSelector((state) => state.formValues);
  const backgrounddata = useSelector((state) => state.background);
  const displaycolordata = useSelector((state) => state.displayColor);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormValues(name, value));
  };

  /* Backgroud setting for Board */
  const handleBackgroundChange = (e) => {
    dispatch(setBackground(e.target.style.backgroundImage));
  };
  /* Background Color setting Options */
  const handleColorChange = (e) => {
    dispatch(setDisplayColor(e.target.style.backgroundColor));
    dispatch(setBackground(e.target.style.backgroundImage));
  };

  /* Boardtitle fields filled check to define Create button color */
  const fieldsfilled = () => {
    return formdata.boardtitle.trim() !== "";
  };
  /* Route to Board Page */
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/board-create");
  };

  return (
    <div className="boardmodal">
      <div className="boardmodal-content">
        <section className="boardmodaldivouter">
          <div className="modalheaderdiv">
            <h2 className="createheader">Create board</h2>
            <Button className="closemodalbutton" onClick={closeModal}>
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
          <div className="modalbodyouter">
            <div className="boardstructurediv">
              <div
                className="boarditemsstructurediv"
                style={{
                  backgroundImage: backgrounddata,
                  backgroundColor: displaycolordata,
                }}
              >
                <img src={BoardImage} alt="noimage"></img>
              </div>
            </div>
            <div className="backgroundsettingsouterdiv">
              <div className="backgroundheadingalign">
                <div className="backgroundheading">Background</div>
                <div className="backgroundfinddiv">
                  <ul className="backgroundImageslist">
                    <li className="backgroundImage">
                      <Button
                        className="Imageselectbutton borderImage"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1704732510471-5a99789c6123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzA0OTAzNjA3fA&ixlib=rb-4.0.3&q=80&w=400)",
                        }}
                        onClick={handleBackgroundChange}
                      ></Button>
                    </li>
                    <li className="backgroundImage">
                      <Button
                        className="Imageselectbutton borderImage"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1704616950334-38157594e3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzA0OTAzNjA3fA&ixlib=rb-4.0.3&q=80&w=400)",
                        }}
                        onClick={handleBackgroundChange}
                      ></Button>
                    </li>
                    <li className="backgroundImage">
                      <Button
                        className="Imageselectbutton borderImage"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1704798123029-d63689dd2b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzA0OTAzNjA3fA&ixlib=rb-4.0.3&q=80&w=400)",
                        }}
                        onClick={handleBackgroundChange}
                      ></Button>
                    </li>
                    <li className="backgroundImage">
                      <Button
                        className="Imageselectbutton borderImage"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1634840884193-2f6cf2538871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzA0OTAzNjA3fA&ixlib=rb-4.0.3&q=80&w=400)",
                        }}
                        onClick={handleBackgroundChange}
                      ></Button>
                    </li>
                  </ul>
                  <ul className="backgroundcolorlist">
                    <li className="backgroundcolor">
                      <Button
                        className="backgroundcolorselect borderImage"
                        style={{
                          backgroundColor: "rgb(34, 140, 213)",
                          backgroundImage:
                            "url(../../src/assets/bluetile.svg)",
                        }}
                        onClick={handleColorChange}
                      ></Button>
                    </li>
                    <li className="backgroundcolor">
                      <Button
                        className="backgroundcolorselect borderImage"
                        style={{
                          backgroundColor: "rgb(11, 80, 175)",
                          backgroundImage:
                            "url(../../src/assets/purpletile.svg)",
                        }}
                        onClick={handleColorChange}
                      ></Button>
                    </li>
                    <li className="backgroundcolor">
                      <Button
                        className="backgroundcolorselect borderImage"
                        style={{
                          backgroundColor: "rgb(103, 66, 132)",
                          backgroundImage:
                            "url(../../src/assets/violettile.svg)",
                        }}
                        onClick={handleColorChange}
                      ></Button>
                    </li>
                    <li className="backgroundcolor">
                      <Button
                        className="backgroundcolorselect borderImage"
                        style={{
                          backgroundColor: "rgb(168, 105, 193)",
                          backgroundImage:
                            "url(../../src/assets/pinktile.svg)",
                        }}
                        onClick={handleColorChange}
                      ></Button>
                    </li>
                    <li className="backgroundcolor">
                      <Button
                        className="backgroundcolorselect borderImage"
                        style={{
                          backgroundColor: "rgb(239, 118, 58)",
                          backgroundImage:
                            "url(../../src/assets/purple.svg)",
                        }}
                        onClick={handleColorChange}
                      ></Button>
                    </li>
                    <li className="backgroundcolor">
                      <Button
                        className="backgroundcolorselect borderImage"
                        style={{
                          backgroundColor: "rgb(198, 216, 255)",
                          backgroundImage:
                            "url(../../src/assets/purple.svg)",
                        }}
                        onClick={handleColorChange}
                      ></Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="boardtitleouterdiv">
                <label className="boardtitle">
                  <div className="boardtitlecontentaligndiv">
                    Board title
                    <span className="asterisk">*</span>
                  </div>
                  <input
                    type="text"
                    id="title"
                    name="boardtitle"
                    value={formdata.boardtitle}
                    onChange={handleInputChange}
                    className="titleinput borderImage fontfamily"
                    required
                  ></input>
                </label>
              </div>
              <div className="requiredInfo">
                <span
                  role="img"
                  aria-label="wave"
                  className="requiredInfostyle"
                >
                  👋
                </span>
                <p className="requiredparastyle">Board title is required</p>
              </div>
              <label className="visibilitytitle">Visibility</label>
              <div className="boardtitleouterdiv">
                <select
                  id="boardvisibilty"
                  name="visibility"
                  value={formdata.visibility}
                  onChange={handleInputChange}
                  className="selectstyle borderImage"
                >
                  <option className="optionstyle" value="Private">
                    Private
                  </option>
                  <option className="optionstyle" value="Workspace">
                    Workspace
                  </option>
                  <option value="optionstyle">Public</option>
                </select>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: fieldsfilled()
                    ? "blue"
                    : "rgba(9, 30, 66, 0.03)",
                  color: fieldsfilled()
                    ? "whitesmoke"
                    : "rgba(9, 30, 66, 0.31)",
                  cursor: fieldsfilled() ? "pointer" : "not-allowed",
                }}
                disabled={!fieldsfilled()}
                className="createboardbutton borderImage fontfamily"
              >
                Create
              </button>
            </form>
          </div>
        </section>
      </div>
      <div className="boardmodal-overlay" onClick={closeModal}></div>
    </div>
  );
};
export default BoardModal;
