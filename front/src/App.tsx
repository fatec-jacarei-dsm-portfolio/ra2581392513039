import type { CSSProperties } from "react";
import Header from "./components/Header";

export default function App() {

  return(
    <div style={AppStld}>
      <Header/>
    </div>
  )
}

const AppStld: CSSProperties = {
  backgroundColor: "#262626",
  height: "100vh",
  width: "100vw",
}