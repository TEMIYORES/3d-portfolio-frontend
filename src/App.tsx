import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-slate-300/20">
      <Outlet />
    </div>
  );
};

export default App;
