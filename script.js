function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById("bill").value;
    let servicoQual = document.getElementById("servicoQual").value;
    let NumOfpeople  = document.getElementById("people").value;
    if(bill == ""||servicoQual==0){
        alert("Por Favor, prencha os valores")
        return;
    }
    if(NumOfpeople==0||NumOfpeople <=1){
        document.getElementById("each").style.display = "none"
    }else{
        document.getElementById("each").style.display= "block"
    }

    let total = (bill* servicoQual)/NumOfpeople;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalTip").style.display = "block";

}


document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("tipsForm").addEventListener('submit',calculateTip)