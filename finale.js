let counter = 0;

const count = document.getElementById("count");
console.log(count);

const buttons = document.querySelectorAll(".button-xs");
console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        const style = e.currentTarget.classList;

        if(style.contains("minus")){
            counter --;
        }else if(style.contains("plus")){
            counter ++;
        }else{
            counter = 0;
        }

        count.textContent = counter;

        if(counter > 0){
            count.style.color = "green";
        }else if(counter < 0){
            count.style.color = "red";
        }else{
            count.style.color = "black";
        }
     });
});



