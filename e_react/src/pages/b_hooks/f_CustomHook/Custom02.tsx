import React from "react";
import { useInput } from "./useInput";

export default function Custom02() {
  // 커스텀 훅을 사용한 input창 상태 관리
  //# 이름 입력에 대한 관리
  const { 
    value: name, 
    bind: nameBind, // value 데이터 값, onChange 변화 함수
    reset: nameReset 
  } = useInput("");

  //# 이메일 입력에 대한 관리
  const { 
    value: email, 
    bind: emailBind, 
    reset: emailReset 
  } = useInput("");

  //# 닉네임 임력에 대한 관리
  const { 
    value: nickName, 
    bind: nickNameBind, 
    reset: nickNameReset 
  } = useInput("");

  const handleSubmit = () => {
    console.log(`회원가입 완료: `);
    nameReset();
    emailReset();
    nickNameReset();
  };

  // useInput에 대한 호출 마다 새로운 데이터가 상태 관리
  // const [value, setValue] = useState(initialValue);

  // const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // } 

  // const reset = () => {
  //   setValue(initialValue);
  // }

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        // UI에 바인딩(적혀)되어 실질적으로 프로세스가 구현
        value={nameBind.value}
        onChange={nameBind.onChange}
      />
      <button onClick={nameReset}>이름 초기화</button>
      <input
        type="text"
        name="email"
        placeholder="사용자 이메일"
        {...emailBind}
        // value={emailBind.value}
        // onChange={emailBind.onChange}
      />
      <button onClick={emailReset}>이메일 초기화</button>
      <input
        type="text"
        name="nickName"
        placeholder="사용자 닉네임"
        value={nickNameBind.value}
        onChange={nickNameBind.onChange}
      />
      <button onClick={nickNameReset}>닉네임 초기화</button>

      {/* 사용자 별명(nickName) 입력 창 */}
      {/* 해당 입력 창에 대한 초기화 */}

      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
}