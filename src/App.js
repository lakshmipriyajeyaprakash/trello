import "./styles.css";
import { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Components/Board";
import {addBoardList,incrementId} from "../src/Store/actions.js";
import { useDispatch, useSelector } from "react-redux";
import DataRenderPage from "../src/Components/DataRenderPage.js";

export default function App() {
  const dispatch = useDispatch();
  const formdata = useSelector((state) => state.formValues);
  const backgrounddata = useSelector((state) => state.background);
  const displaycolordata = useSelector((state) => state.displayColor);
  
  const Id = useSelector((state) => state.uniqueId);
  const boardlist = useSelector((state) => state.boardList);
  console.log(boardlist);
  useEffect(() =>{
    let newBoardList;
    dispatch(incrementId());
    if(formdata.boardtitle!=="" && formdata.visibility!=="" && backgrounddata!=="" && displaycolordata!==""){
     newBoardList = {
      id: Id,
      boardtitledata: formdata.boardtitle,
      boardvisibility: formdata.visibility,
      boardbackground: backgrounddata,
      boardcolor: displaycolordata,
    }
  }
  dispatch(addBoardList(newBoardList));
  console.log(newBoardList);
  },[]);
  return (
    <div className="App">
      <Router>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route path="/" element={<DataRenderPage></DataRenderPage>} />
            <Route path="/board-create" element={<Board></Board>} />
          </Routes>
        </DndProvider>
      </Router>
    </div>
  );
}
