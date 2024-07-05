let btn = document.getElementById("btn");
let basicSalary = document.getElementById("basic");
let hra = document.getElementById("hra");
let travelAllowance = document.getElementById("ta");
let convenyanceAllowance = document.getElementById("ca");
let dearnessAllowance = document.getElementById("da");
let ctc = document.getElementById("total");
let providientFund = document.getElementById("pt");
let professionalFund = document.getElementById("pf");
let employeeProfessionalFund = document.getElementById("epf");
let takehomeNet = document.getElementById("takehome");

let btn1 = document.getElementById("btn1");
let basicSalary1 = document.getElementById("basic1");
let hra1 = document.getElementById("hra1");
let travelAllowance1 = document.getElementById("ta1");
let convenyanceAllowance1 = document.getElementById("ca1");
let dearnessAllowance1 = document.getElementById("da1");
let ctc1 = document.getElementById("total1");
let providientFund1 = document.getElementById("pt1");
let professionalFund1 = document.getElementById("pf1");
let employeeProfessionalFund1 = document.getElementById("epf1");
let takehomeNet1 = document.getElementById("takehome1");

function getPayslipDetails() {
  let input = document.getElementById("inputt");
  let salary = parseInt(input.value);
    if(isNaN(salary)){
        alert("Enter the valid salary")
    }
    let monthlySalary = salary/12;

    basicSalary.textContent = `Basic Salary: ₹${(salary*0.5).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    hra.textContent = `House Rent Allowance (H.R.A): ₹${(salary*0.2).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    // travelAllowance.textContent = `Travel Allowance (T.A): ₹${(salary*0.07).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    convenyanceAllowance.textContent = `Conveyance Allowance (C.A): ₹${(salary*0.3).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    // dearnessAllowance.textContent = `Dearness Allowance (D.A): ₹${(salary*0.1).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    ctc.textContent = `Medical Insurance: ₹${(salary*0.048).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    providientFund.textContent = `Provident Fund: ₹${(salary*0.072).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    professionalFund.textContent = `Professional Tax: ₹${2400}`;
    employeeProfessionalFund.textContent = `Employee Providient Fund: ₹${(salary*0.072).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    takehomeNet.textContent = `Net Salary: ${salary-(2400+(2*(salary*0.072))+(salary*0.048)).toLocaleString("en-IN",{maximumFractionDigits:2})}`


    //Montly salary

    basicSalary1.textContent = `Basic Salary:  ₹${(monthlySalary*0.5).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    hra1.textContent = `House Rent Allowance (H.R.A): ₹${(monthlySalary*0.2).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    // travelAllowance1.textContent = `Travel Allowance (T.A): ₹${(monthlySalary*0.3).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    convenyanceAllowance1.textContent = `Conveyance Allowance (C.A): ₹${(monthlySalary*0.3).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    // dearnessAllowance1.textContent = `Dearness Allowance (D.A): ₹${(monthlySalary*0.1).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    ctc1.textContent = `Medical Insurance: ₹${(monthlySalary*0.048).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    providientFund1.textContent = `Provident Fund: ₹${(monthlySalary*0.072).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    professionalFund1.textContent = `Professional Tax: ₹${200}`;
    employeeProfessionalFund1.textContent = `Employee Providient Fund: ₹${(monthlySalary*0.072).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    takehomeNet1.textContent = `Net Salary: ${monthlySalary-(200+(2*(monthlySalary*0.072))+(monthlySalary*0.048)).toLocaleString('en-IN',{maximumFractionDigits:2})}`
}



btn.addEventListener("click", getPayslipDetails);
