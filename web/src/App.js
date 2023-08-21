import React from "react";
import AppRouter from "./AppRouter"; // 引入您之前定義的路由配置
import "./App.css";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
