const inputBox = document.querySelector("#input-box");
const task = document.querySelector ("#tasks")

function addTask(){
    if(inputBox.value === ''){
        alert("you must add task");
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        task.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
}
task.addEventListener("click", function(e){

    if (e.target.tagName === "LI"){   //task bhitra ko li tag ma click garyo vane li tag ma 
        e.target.classList.toggle("completed"); //completed naam ko class banaidinxa jun css ma style gari sakeko xa
    }
    
    else if (e.target.tagName === "SPAN"){     //span tag ma click garyo vane 
        e.target.parentElement.remove();       //tesko parent element which is li tag lai remove handinxa
    }
})