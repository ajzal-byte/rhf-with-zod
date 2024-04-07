import { Link, Route, Routes } from "react-router-dom";
import { TraditionalForm } from "./components";
import "./App.css"

const App = () => {
  return (
    <>
      <div className="links">
      <Link to="/traditional">Traditional Form</Link>
      <Link to="/traditional">React Hook Form</Link>
      <Link to="/traditional">React Hook Form with Zod</Link>
      </div>

      <Routes>
        <Route path="/traditional" element={<TraditionalForm />} />
      </Routes>
    </>
  );
};

export default App;
