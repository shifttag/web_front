// review04.js

//! 학생 관리 시스템

let students = [];

function addStudent(nickname, number, grade) {
  const newStudent = {
    id: (students.length + 1), 
    name: nickname,
    studentNumber: number,
    studentGrade: grade,
    abc:'none'
  };
  if(grade < 0 || grade > 100) console.log('점수 입력 오류')
    else if(grade >= 90)  newStudent.abc = 'A'
    else if (grade >= 80) newStudent.abc = 'B'
    else if (grade >= 70) newStudent.abc = 'C'
    else if (grade >= 60) newStudent.abc = 'D'
    else newStudent.abc = 'F'
  students.push(newStudent);
}


function selectStudent (number){
  let selectStudent = students.filter(student => student.studentNumber === number);
  console.log(selectStudent);  
};

function deleteStudent(number) {
  students = students.filter(student => student.studentNumber !== number);  
}

function display() {
  console.log('--- 학생 목록 ---');
  students.forEach(student => {
    console.log(`${student.id}. 이름: ${student.name}, 학번: ${student.studentNumber}, 점수: ${student.studentGrade}, 학점: ${student.abc}`);
  })
}

function deleteStudentAll() {
  students = [];
}



addStudent('홍동현', 20193303, 75);
addStudent('제정빈', 20193195, 85);
addStudent('이종민', 20193295, 78);
addStudent('류용재', 20193275, 95);
addStudent('정영훈', 20193397, 55);
addStudent('이승수', 20193300, 65);

display();