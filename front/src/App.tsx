import type { CSSProperties } from "react";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Stacks from "./components/Stacks";

export default function App() {

  return(
    <div style={AppStld}>
      <Header/>
      <Sobre/>
      <Stacks/>
    </div>
  )
}

const AppStld: CSSProperties = {
  backgroundColor: "#262626",
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
}