// let spacing = document.querySelector("input[name ='space']")
// let blurr = document.querySelector("input[name ='blur']")
// let base = document.querySelector("input[name ='base']")
// console.log(base)
// let image = document.getElementsByTagName("img")[0]

// spacing.addEventListener("input" ,()=>{
//   document.documentElement.style.setProperty("--spacing",`${spacing.value}px`);
// })

// blurr.addEventListener("input" ,()=>{
//   document.documentElement.style.setProperty("--blur",`${blurr.value}px`);
// })

// base.addEventListener("input",()=>{
//   document.documentElement.style.setProperty("--base",`${base.value}`);
// })


// // }))



function handleUpdate(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${suffix}`);
}
let inputs = document.querySelectorAll(".option input");
inputs.forEach(input => input.addEventListener("input",handleUpdate));

















