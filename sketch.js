let button;
let adjective;
let adverb;
let noun;

function setup() {
  createCanvas(500, 100);
  textAlign(CENTER,CENTER);
  textSize(16);
  stroke("blue");
  fill("blue");
  button = createButton('recieve fortune');
  button.position(0, 0);
  button.mousePressed(displayFortune);
}

function displayFortune() {
  background(255);
  adjective = RiTa.randomWord({pos:"a"});
  adverb = RiTa.randomWord({pos:"r"});
  superAdverb = RiTa.randomWord({pos:"rbs"});
  compAdverb = RiTa.randomWord({pos:"rbr"});
  noun = RiTa.randomWord({pos:"nns"});
  verb = RiTa.randomWord({pos:"v"});
  pronoun = RiTa.randomWord({pos:"prp$"});
  let message = [
  "You will find "+adjective+" success in your future endeavors.",
  adjective.charAt(0).toUpperCase()+adjective.slice(1)+" news will come your way "+adverb+".",
  "Your " +adjective+" work will not pay off in the end.",
  "Things come to those who are "+adjective+".",
  "Seek "+adjective+" "+noun+" and you will achieve greatness.",
  verb.charAt(0).toUpperCase()+verb.slice(1)+" yourself.",
  "Let "+ pronoun+" heart "+verb+" freely.",
  "To live "+adverb+ " is not always wiser.",
  "Fulfillment can be found in a " +adjective+ " accident."
    
];
  let fortune = random(message);
  text(fortune, width/4-10,height/10,300,90);
  rect(0,80,80,100);
  rect(480,80,500,100);
  rect(480,0,500,20);
}