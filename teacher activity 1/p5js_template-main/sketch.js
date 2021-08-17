var Student = {
  name : "sharon",
  class : 10,
  roll_no : 8,
  favorite_subject : "english",
  marks: [30,35,40,50]
};

function setup(){
  createCanvas(400,400);
  console.log(Student.name);
  Student.name = "blessy";
  console.log(Student.name);
}
function draw(){
  background(0);
}