 let data;
 
 async function setup() {

 data = await loadJSON("data.json");
 createCanvas(300, 700);

 
}


function draw() {

  background(220);

for (index in data) {

if (data[index].amount > 20) {

fill('skyblue');

} else {

     fill('lightgreen');


}

   
rect(
    20,
    25 + (35 * index),
    data[index].amount / 181 * 260,
    10
);


    fill('black');
textSize(12);
text(
    `${data[index].icon} ${data[index].amount}B - ${data[index].name}`,
    20, 
    50 + (35 * index)

);

}



  


textSize(32);
text("🦆", mouseX, mouseY + 20);




}