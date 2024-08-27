import React from "react";
import UseState01 from "./a_UseState/UseState01";

// 전체 파일 정렬
// ctrl + a : 전체 선택
// ctrl + k + f : 포맷터 사용

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>리액트 Hooks</h1>

      <h2>리액트 Hooks - useState</h2>
      <UseState01 />
    </div>
  );
}

export default Index;
