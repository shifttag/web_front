import React from 'react'

//# 기능 함수
function example01() {
}

function example02() {
}

export { example01 as ex01, example02 as ex02};

//# 컴포넌트 함수
function Example01() {
  
}
function Example02() {

}
export { Example01, Example02 };

export default function JSX02() {
  // 픽사베이(pixabay) 
  // : 이미지 경로(절대 경로)를 변수에 저장
  // const imgUrl = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg';

  const cat = {
    catUrl: 'https://cdn.pixabay.com/photo/',
    description: '2017/02/20/18/03/',
    imageId: 'cat-2083492_640.jpg',
    name: '아기고양이',
    imageTheme: {
      width: '200px',
      height: '150px'
    },
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  }
  /*
  ! JSX 연습 예제
  >> JSX02 컴포넌트를 JSX 폴더 내의 index.tsx 파일에서 불러오기(import)

  전체 단일 루트 노트(빈 Fragment 사용)
  - div 태그: style 속성으로 theme 속성 지정
    >> p 태그: 아기고양이's Picture
    >> img 태그
      - src 속성: 속성들을 + 연산자로 표현
      - alt 속성: name 속성
      - width, height 속성: 각각 imageTheme 지정
  */
  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img 
          src={cat.catUrl + cat.description + cat.imageId} 
          alt={cat.name} 
          width={cat.imageTheme.width}
          height={cat.imageTheme.height}
        />
      </div>
      <hr />
      <br />
      <div></div>
    </>
  )
}
