import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Components/Board";
import DataRenderPage from "../src/Components/DataRenderPage.js";

export default function App() {
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
