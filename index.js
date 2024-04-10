const button = document.getElementsByClassName("make-circles");
const section = document.querySelector('section');


button[0].addEventListener("click", (e) => {

for (let i = 0; i < 15; i++) {
    if (!section[i]) {
        section.innerHTML = `
  <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    <circle r="30" cx="50" cy="50" fill="red" />
  </svg>
`;
    }
}
});


// function randomColor(div) {
//     const colors = [];

//     for (let i = 0; i < 10; i++) {
//         const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//         colors.push(randomColor);
//         return colors.toString();
//     }
// }



console.log(makeButton)