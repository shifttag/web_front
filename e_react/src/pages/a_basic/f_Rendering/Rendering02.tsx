import React from 'react'

//! 배열 렌더링
// map, filter

export default function Rendering02() {
  const people = ['홍동현', '이도경', '윤대휘', '정규민', '김소빈'];

  const peopleDescription = [
    {
      id: 0,
      name: '이도경',
      job: 'developer'
    },
    {
      id: 1,
      name: '이도경',
      job: 'operation'
    },
    {
      id: 2,
      name: '윤대휘',
      job: 'business'
    },
    {
      id: 3,
      name: '정규민',
      job: 'business'
    },
    {
      id: 4,
      name: '김소빈',
      job: 'operation'
    }
  ]
  return (
    <div>Rendering02</div>
  )
}
