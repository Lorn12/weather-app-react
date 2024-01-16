import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700">
      <TopButtons />
      <Inputs />
    </div>
  );
}

export default App;
