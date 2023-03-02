function gradingStudents(grades) {
    // Write your code here
    return grades.map(grade => {
        if ((grade < 38) || (grade % 5 < 3)) return grade;
        else return grade += 5 - (grade % 5);
    });
}

let grades = [73,67,38,33];

console.log(gradingStudents(grades));