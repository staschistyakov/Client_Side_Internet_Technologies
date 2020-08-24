var initial_cards = ["1clubs.png","1hearts.png","2clubs.png","2hearts.png","3clubs.png","3hearts.png"];
var cards_values = new Object({"1clubs.png":1,"1hearts.png":1,"2clubs.png":2,"2hearts.png":2,"3clubs.png":3,"3hearts.png":3});
var count = 0;
var busy = false;

function shuffle(init_cards){
  var random_cards = [];
  for (i = 0; i<6; i++){
    num = getRandomInt(init_cards.length);
    random_cards.push(init_cards[num]);
    init_cards.splice(num,1);
  }
  return random_cards;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function reset(){
  for (i = 0; i<cards_in_game.length; i++){
    document.getElementById(cards_in_game[i]).src = "back.png";
  }
}

function start_again(){
  random_cards = shuffle(random_cards);
  document.getElementById("card_1").src = "back.png";
  document.getElementById("card_2").src = "back.png";
  document.getElementById("card_3").src = "back.png";
  document.getElementById("card_4").src = "back.png";
  document.getElementById("card_5").src = "back.png";
  document.getElementById("card_6").src = "back.png";
}

function open_card(id,index){
  count = count + 1;
  if (count == 1){
    previous_id = id;
    previous_index = index;
  }
  if ((busy == false) && (count < 2)){
    document.getElementById(previous_id).src = random_cards[previous_index];
  } else if ((busy == false) && (count == 2)) {
    document.getElementById(id).src = random_cards[index];
    busy = true;
    card_1 = document.getElementById(previous_id).getAttribute("src");
    card_2 = document.getElementById(id).getAttribute("src")
    if (cards_values[card_1]==cards_values[card_2]){
      setTimeout(()=>{
      document.getElementById(previous_id).src = "clear.png";
      document.getElementById(id).src = "clear.png";
      count = 0;
      busy = false;
    },1500);
    } else {
        setTimeout(()=>{
          document.getElementById(id).src = "back.png";
          document.getElementById(previous_id).src = "back.png";
          busy = false;
          count = 0;
      },1500);
    }
  }
}

function check_if_eliminated(id,index){
  if (document.getElementById(id).getAttribute("src") == "clear.png"){
    console.log("The card was already paired up");
  } else {
    open_card(id,index);
  }
}

random_cards = shuffle(initial_cards);

document.getElementById("card_1").addEventListener("click",()=>{check_if_eliminated("card_1",0)},false);
document.getElementById("card_2").addEventListener("click",()=>{check_if_eliminated("card_2",1)},false);
document.getElementById("card_3").addEventListener("click",()=>{check_if_eliminated("card_3",2)},false);
document.getElementById("card_4").addEventListener("click",()=>{check_if_eliminated("card_4",3)},false);
document.getElementById("card_5").addEventListener("click",()=>{check_if_eliminated("card_5",4)},false);
document.getElementById("card_6").addEventListener("click",()=>{check_if_eliminated("card_6",5)},false);
document.getElementById("restart").addEventListener("click",start_again,false);
