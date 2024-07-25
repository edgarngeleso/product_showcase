let buttons = document.querySelectorAll("button");
let paragraphs = document.querySelectorAll("p");

buttons.forEach((button,index)=>{
    button.addEventListener("click",(e)=>{
        alert(`Added item ${paragraphs[index].textContent} to cart`);
    })
})