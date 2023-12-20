import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./learn-react-hooks-useState";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
      </Routes>
    </Router>
  );
}
