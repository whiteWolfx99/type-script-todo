import { Routes, Route } from "react-router-dom";
import Qoutes from "./Views/Qoutes";
import Todos from "./Views/Todos";

const Main  = () => {
  return (
    <Routes>
      <Route path="/" element={<Qoutes />} />
      <Route path="/Todos" element={<Todos />} />
    </Routes>
  );
};
export default Main;
