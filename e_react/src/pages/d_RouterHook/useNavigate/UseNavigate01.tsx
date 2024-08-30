import React from 'react'
import { useNavigate } from 'react-router-dom';

//! useNavigate()
// : React Router에서 제공하는 Hook
// >> 사용자를 다른 페이지로 이동시킬 때 사용

//? Link 컴포넌트와의 차이
// >> 이벤트 핸들러나 비동기 작업 내에서의 특정 경로 이동이 가능

export default function UseNavigate01() {
  //# useNaivgate() 사용 방법
  const navigate = useNavigate();
  // >> '네비게이트' 라는 이름으로 호출
  // >> 원하는 경로를 문자열 인수로 전달하여 이동

  //? useNavigate 훅의 옵션
  // - state 옵션
  // : 네비게이션(경로)과 함께 상태 전달이 가능
  // >> 해당 상태는 useLocation을 통해 접근 가능

  const goToParentPage = () => {
    console.log('버튼이 클릭됨');
    navigate('/parent', {state: { userId: 12345 }});
  }

  const goToHomePage = () => {
    console.log('홈페이지로 이동');
    navigate('/');
  }

  const goToPrevPage = () => {
    navigate(-1);
  }

  return (
    <div>
      <p>UseNavigate01 페이지 입니다.</p>
      <button onClick={goToParentPage}>parent 페이지로 이동합니다</button>
      <button onClick={goToHomePage}>Home 페이지로 이동합니다</button>
      <button onClick={goToPrevPage}>이전 페이지로 이동합니다</button>
    </div>
  )
}
