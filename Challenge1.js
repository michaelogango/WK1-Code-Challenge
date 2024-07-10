function Checkgrade(){
    alert('Challenge one is on-going')
    let student;

    student=prompt("Please write up your grade")
    
    if(student>100 || student<0 || isNaN(student)){
        alert("Please check the number make sure its from 0-100")
        return;
    }

    if (student >79){
        alert("Your grade is an A")
    } else if( student>=60 && student<=79){
        alert("Your grade is an B-")
    } else if(student>=49 && student<=59){
        alert("Your grade is an C-")
    }else if(student>=40 && student<=49){
        alert("Your grade is an D-")
    } else {
        alert("Your grade is an E, Don't worry, you got this")
    }

}
