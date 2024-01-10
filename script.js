const themes = {
    nature:{
        background:' url("nature.jpg")',
        font: "Lora, serif",
    },
    space:{
        background: 'url("space.jpg")',
        font: "Montserrat, sans-serif",
    }, 
    city:{
        background: 'url("city.jpg")',
        font: "Raleway, sans-serif",
    }, 
    cyberpunk:{
        background: 'url("cyberpunk.jpg")',
        font: "Pacifico, cursive",
    },
}


const buttons = document.querySelectorAll(".button");
console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener('click' ,function(e){
        console.log(e)
        console.log(e.target.id)
        const theme = themes[e.target.id]
        if(theme){
            body.style.background = theme.background;
            body.style.fontFamily = theme.font;
        }
    })
})