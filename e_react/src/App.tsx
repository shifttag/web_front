import React from 'react';
//# 경로에 따라 바뀌는 컴포넌트
import Basic from './pages/a_basic';
import { Route, Routes } from 'react-router-dom';
import Hooks from './pages/b_hooks';
import Todos from './pages/z_todos'
import RouterComponent from './pages/c_Router'
//# 고정될 컴포넌트
import NaviBar from './components/NaviBar';
import Parent from './pages/c_Router/Parent';
import Example01 from './pages/c_Router/Example01';
import Example02 from './pages/c_Router/Example02';
import RouterHook from './pages/d_RouterHook';
import Axios from './pages/e_Axios';
import GlobalState from './pages/f_GlobalState';
import Style from './pages/g_Style/Style01';
import { useCountStore } from './pages/f_GlobalState/Zustand01';

// 전역상태 관리 예제

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  const { count } = useCountStore();
  return (
    <div>
      <h1>React Project</h1>
      <NaviBar />
      <p>{ count }</p>

      {/* Routes태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route태그: 단일 태그 사용 권장 */}
        {/* path속성: 해당 Routes 내에서 사용하는 URL */}
        {/* element속성: 해당 path속성과 일치할 경우 보여질 컴포넌트 */}
        <Route path='/basic' element= {<Basic />} />
        <Route path='/hooks' element= {<Hooks />} />
        <Route path='/todos' element= {<Todos />} />
        <Route path='/axios' element= {<Axios />} />
        <Route path='/globalstate' element= {<GlobalState />} />
        <Route path='/style' element= {<Style />} />

        {/* 
          해당 컴포넌트에 대한 메인경로/*
          >> 위 컴포넌트에서 라우트 경로에 따라 페이지 전환이 일어남을 명시
        */}
        <Route path='/routerComponent/*' element= {<RouterComponent />} />

        {/* 
          해당 컴포넌트에 대한 메인경로
          >> 하위 컴포넌트를 추가 경로로 명시
        */}
        <Route path='/parent'>
        {/* 
        인덱스 경로를 사용하여 감싸는 Route 컴포넌트에 지정 경로로 기본적으로 렌더링될 컴포넌트를 지정 
        */}
          <Route index element= {<Parent />}/>

        {/* parent 경로에 추가되는 path에 따라 보여지는 컴포넌트가 달라짐 */}
          <Route path='example01' element= {<Example01 />}/>
          <Route path='example02' element= {<Example02 />}/>
        </Route>

          <Route path='RouterHook' element= {<RouterHook />}/>
      </Routes>
      

    </div>
  );
}

export default App;
