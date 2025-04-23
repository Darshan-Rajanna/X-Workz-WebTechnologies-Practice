let x=10;
let y=20;
x=1;
y=1;
console.log(x+y);

const a=10;

console.log(a);

// document.writeln(a);

// let emp1={empId:101, empName:"John", empSalary:50000};

let emp2 = new Object();
emp2.empId=102;
emp2.empName="Doe";
emp2.empSalary=60000;


function emp1(empId, empName, empSalary) {
    this.empId = empId;
    this.empName = empName;
    this.empSalary = empSalary;
}

class employee {
    
}

let abc = emp2={empId:101, empName:"John", empSalary:50000};

console.log(abc.empId);
console.log(abc.empName);
console.log(abc.empSalary);


