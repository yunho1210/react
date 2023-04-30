import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/movie/:id" element={<Detail />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
