//variables from HTML
const ITEM_HELD=document.getElementById("item");
const MONEY=document.getElementById("money");
const COOK=document.getElementById("cook");
const COFFEE=document.getElementById("coffee");
const MILK=document.getElementById("milk");
const RESULT=document.getElementById("result");
const CLIENT=document.getElementById("client");
const ORDER=document.getElementById("order");

//variables from JS
let money;
let item_made;

//functions
function inicialize(){
    money=100;
    MONEY.textContent=money;
    RESULT.textContent=" ";
    ITEM_HELD.textContent=" ";
}
function hold_item(item){
    ITEM_HELD.textContent=item.textContent.toLowerCase();
    if(item==RESULT){
        RESULT.textContent=" ";
    }
}
function add_item(space){
    if(document.getElementById(space).textContent==""){
        document.getElementById(space).textContent=ITEM_HELD.textContent;
        ITEM_HELD.textContent=" ";
    }else{
        alert("You already have an item in that space!");
    }
}
function mix(){
    if(COOK.textContent.includes("coffee") && COOK.textContent.includes("milk")){
        RESULT.textContent="Latte";
        item_made=RESULT.textContent;
    }
    else{
        alert("You don't have the right ingredients to make a something!");
    }
}
function give_item(){
    if(item_made.toLowerCase()==ORDER.textContent.toLowerCase()){
        RESULT.textContent="";
        money+=10;
        MONEY.textContent=money;
    }else{
        alert("The client doesn't want that!");
    }
}

inicialize();