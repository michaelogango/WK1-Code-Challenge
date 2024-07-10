function Checkspeed(){
    alert('Challenge two is on-going')
    let speed;
    let limit=70;
    let demerit=5;
    

    speed=prompt("Please share your cars speed")
    
    if(speed<0 || isNaN(speed)){
        alert("Please check the speed make sure its from 1 upwards")
        return;
    }

    if (speed <=limit){
        alert("OK!!!!!!, Keep it up")
    } else( speed>=71);{
        const licensesus=Math.floor((speed-limit)/demerit);
        if(licensesus>12){
            alert("License suspended");
        }
    else{
            alert(`License is abou to be suspended points: ${licensesus}`);
        }

}
}
