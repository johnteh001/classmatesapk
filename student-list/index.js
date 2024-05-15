const studentList = [
  {
    name: "Olayemi Adeaya",
    grade: "B",
    complexion: "Light",
    Hobby: "Writing Javascript",
  },
  {
    name: "Kolade Ade",
    grade: "B",
    complexion: "Dark",
    Hobby: "Writing Articles",
  },
  {
    name: "Abayomi Abiola",
    grade: "C",
    complexion: "Dark",
    Hobby: "",
  },
  {
    name: "Maryam Abdullahi",
    grade: "A",
    complexion: "Light",
    Hobby: "Eating",
  },
  {
    name: "Adeyemi Abiodun",
    grade: "C",
    complexion: "Dark",
    Hobby: "Writing and Building Apps",
  },
];

const tableBody = document.getElementById("table-body");

let data = "";
// for (let i = 0; i < studentList.length; i++) {
//   const student = studentList[i];
//   data += `<tr>
//                 <td>${i + 1}</td>
//                 <td>${student.name}</td>
//                 <td>${student.grade}</td>
//                 <td>${student.complexion}</td>
//                 <td>${student.Hobby}</td>
//             </tr>`;
//   tableBody.innerHTML = data;
// }

// studentList.forEach(function (student, index) {
//   data += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${student.name}</td>
//                 <td>${student.grade}</td>
//                 <td>${student.complexion}</td>
//                 <td>${student.Hobby}</td>
//             </tr>`;
// tableBody.innerHTML = data;
// });

studentList.map(function (student, index) {
  data += `<tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td>${student.complexion}</td>
                <td>${student.Hobby}</td>
            </tr>`;
tableBody.innerHTML = data;
});

// let index = 1;
// for (const student of studentList) {
//   data += `<tr>
//                 <td>${index}</td>
//                 <td>${student.name}</td>
//                 <td>${student.grade}</td>
//                 <td>${student.complexion}</td>
//                 <td>${student.Hobby}</td>
//             </tr>`;
//   index++;
//   tableBody.innerHTML = data;
// }

// for (const index in studentList) {
//     let student = studentList[index];
//       data += `<tr>
//                 <td>${index}</td>
//                 <td>${student.name}</td>
//                 <td>${student.grade}</td>
//                 <td>${student.complexion}</td>
//                 <td>${student.Hobby}</td>
//             </tr>`;
//   tableBody.innerHTML = data;
// }