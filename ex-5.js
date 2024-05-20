const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function totalScore(totalStudents, students) {
  return totalStudents + students.score;
}

let totalStudentScore = students.reduce(totalScore, 0);
console.log(totalStudentScore);

function getAverageStudentScore(students) {
  return totalStudentScore / students.length;
}

const result = getAverageStudentScore(students);
console.log(result);
