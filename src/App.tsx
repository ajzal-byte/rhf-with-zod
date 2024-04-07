import { Link, Route, Routes } from "react-router-dom";
import { ReactHookForm, TraditionalForm } from "./components";
import "./App.css"

const App = () => {
  return (
    <>
      <div className="links">
      <Link to="/traditional">Traditional Form</Link>
      <Link to="/rhf">React Hook Form</Link>
      <Link to="/">React Hook Form with Zod</Link>
      </div>

      <Routes>
        <Route path="/traditional" element={<TraditionalForm />} />
        <Route path="/rhf" element={<ReactHookForm />} />
      </Routes>
    </>
  );
};

export default App;
