const Btn = document.getElementById("btn");
const Text = document.getElementById("text")

Btn.addEventListener("click",()=> {
    setTimeout(() =>{
        Text.style.display = "none";
        const h2 = document.createElement("h2");
        h2.textContent = "ボタンをクリックしました";
        Btn.insertAdjacentElement('beforebegin',h2);
    },2000)
    
})