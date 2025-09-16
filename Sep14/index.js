/* 
"Create a dataset of 5 students with their names, ages, and math scores out of 100. Then render this data in a table."
*/

const studentData = [
    {
        name: "Jon",
        age: "15",
        mathScore: 95
    },
    {
        name: "Robb",
        age: "16",
        mathScore: 90
    },
    {
        name: "Bran",
        age: "12",
        mathScore: 98
    },
    {
        name: "Sansa",
        age: "14",
        mathScore: 85
    },
    {
        name: "Arya",
        age: "10",
        mathScore: 99
    },
];

function insertHeadings(dataGiven) {
    let tpl=`<thead>`;
    for(let key in dataGiven[0]){
        tpl+=`<th>${key}</th>`
    }
    tpl+=`</thead>`;
    return tpl;
}

function renderTable(dataGiven) {
    let tpl = ``;
    tpl += insertHeadings(dataGiven);
    tpl+=`<tbody>`;
    for (let i = 0; i < dataGiven.length; i++) {
        tpl += `<tr>`
        for (let key in dataGiven[i]) {
            if (dataGiven[i].hasOwnProperty(key)) {
                tpl += `<td>${dataGiven[i][key]}</td>`;
            }
        }
        tpl += `</tr></tbody>`
    }
    return tpl;
}
document.querySelector(".root").innerHTML = renderTable(studentData);