function KRA(){
    alert('Challenge three is on-going')
    let Benefits;
    let Salary;
    let netsalary;
    let NHIF;
    let NSSF;
    
    

    Salary=Number(prompt("Please share your salary"));
    Benefits=Number(prompt("Please share your Benefits"));

    Benefits=parseFloat(Benefits)
    Salary=parseFloat(Salary)


    if(Salary<0 || isNaN(Salary)|| Benefits<0||isNaN(Benefits)){
        alert("Please check your Salary or benefits make sure its from 1 upwards")
        return;
    }
    let grosssalary=(Salary+Benefits);
    let tax;

//PAYE
if(grosssalary<=24000){
    tax=grosssalary*0.01;
}else if(grosssalary>24001 && grosssalary<=32,333){
    tax=grosssalary*0.24
}else if(grosssalary>32,334 && grosssalary<=500000){
    tax=grosssalary*0.30
}else if(grosssalary>500010 && grosssalary<=800000){
    tax=grosssalary*0.32
}else {
    tax=grosssalary*0.35
}
//NSSF calculator
    NSSF=(0.06*grosssalary)
//NHIF
    if(grosssalary<=5,999){
        NHIF=150
    }else if(grosssalary>=6000&&grosssalary<=7999){
        NHIF=300;
    }else if(grosssalary>=8000&&grosssalary<=11999){
        NHIF=400;
    }else if(grosssalary>=12000&&grosssalary<=14999){
        NHIF=500;
    }else if(grosssalary>=15000&&grosssalary<=19999){
        NHIF=600;
    }else if(grosssalary>=20000&&grosssalary<=24999){
        NHIF=750;
    }else if(grosssalary>=25000&&grosssalary<=29999){
        NHIF=850;
    }else if(grosssalary>=30000&&grosssalary<=34999){
        NHIF=900;
    }else if(grosssalary>=35000&&grosssalary<=39999){
        NHIF=950;
    }else if(grosssalary>=40000&&grosssalary<=44999){
        NHIF=1000;
    }else if(grosssalary>=45000&&grosssalary<=49999){
        NHIF=1100;
    }else if(grosssalary>=50000&&grosssalary<=59999){
        NHIF=1200;
    }else if(grosssalary>=60000&&grosssalary<=69999){
        NHIF=1300;
    }else if(grosssalary>=70000&&grosssalary<=79999){
        NHIF=1400;
    }else if(grosssalary>=80000&&grosssalary<=89999){
        NHIF=1500;
    }else if(grosssalary>=90000&&grosssalary<=99999){
        NHIF=1600;
    }else{
        NHIF=1700
    }

//Net salary
netsalary=grosssalary-tax-NSSF-NHIF;


alert( 
    `Gross=${grosssalary}
    Payee=${tax},
    NSSF=${NSSF},
    NHIF=${NHIF},
    Net salart=${netsalary}`,

)

}
