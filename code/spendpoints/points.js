const btn = document.querySelectorAll(".ask-content")
const answerContent = document.querySelectorAll(".answer-content")
const iconAsk = document.querySelectorAll(".ask-icon")
btn.forEach((item,index) => {
    let answer = answerContent[index]
    let icon = iconAsk[index]
    item.onclick = () =>{
        answer.classList.toggle("show");
        icon.classList.toggle("show");
    }
})