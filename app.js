let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

let width = document.getElementById("width");
let height = document.getElementById("height");
let color = document.getElementById("color");
let bgColor = document.getElementById("bgColor");
let content = document.getElementById("content");
let select = document.querySelector("select");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    container2.innerHTML = "";
   let block = document.createElement(document.querySelector("select").value);
   block.style.width = width.value + "px";
   block.style.height = height.value + "px";
   block.style.color = color.value;
   block.style.backgroundColor = bgColor.value;
   block.innerText = content.value;
   block.style.display = "flex";
   block.style.justifyContent = "center";
   block.style.alignItems = "center";
   block.style.fontSize = "20px";
   block.style.fontFamily = "cursive";

   container2.append(block);

   document.querySelector(".css-block2").innerHTML = `
        <span class="item">${select.value}</span> { <br>
            <span class="text">width: ${width.value}px</span> <br>
            <span class="text">height: ${height.value}px</span> <br>
            <span class="text">color: "${color.value}"</span> <br>
            <span class="text">bgColor:"${bgColor.value}"</span> <br>
            <span class="text">content: "${content.value}"</span> <br>
        }
   `;
        let item = document.querySelector(".item");
        item.style.color = "black";
        item.style.fontSize = "20px";
        item.style.fontFamily = "cursive";
        let text = [...document.querySelectorAll(".text")];
        text.map(el => {
            el.style.color = "white";
            el.style.fontSize = "20px";
            el.style.fontFamily = "cursive";
    })
});
