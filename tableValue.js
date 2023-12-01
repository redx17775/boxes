function ACE() {
    this.ACE = "ACE";
    this.price = 15.00;
    this.image = "img/ACE.jpg";
}

function Shipping() {
     this.urgent = 10.00;
     this.normal = 5.00;
}





const ace= new ACE()
let array1 = [ 
    ace.ACE ,
    ace.price , 
    ace.image ,
];

const shiping= new Shipping()
let array2 = [ 
    shiping.urgent,
    shiping.normal,  
];
    
const ace_price = array1[1];
let price = 0;
function addCart() {
    document.getElementById("pic").src = array1[2];
    document.getElementById("pic").style.width = "150px";
    document.getElementById("pic").style.objectFit = "cover";
    document.getElementById("name").innerHTML = array1[0];
    document.getElementById("description").innerHTML = "It is a perfume that was manufactured in the Sultanate of Oman by Omani hands and contains aromatic ingredients that give its owner luxury and sophistication.";
    document.getElementById("price").innerHTML = array1[1] + " OMR";
    document.getElementById("Subtotal").innerHTML = 0 + " OMR";
    for (let i = 1; i <= num; i++){
        document.getElementById("Subtotal").innerHTML = (price += (ace_price * array3.length)) + " OMR";
    }
    if (document.getElementById("Subtotal").innerHTML == "0 OMR"){
        document.getElementById("ship").innerHTML = "0 OMR";
        document.getElementById("total").innerHTML = "0 OMR";
    }
    else{
        document.getElementById("ship").innerHTML = array2[1] + " OMR";
        document.getElementById("total").innerHTML = array2[1] + price + " OMR";
    }
    
    
}

let array3 = new Array();
function add(){
    array3.push(new ACE());
}

var map = new Map();
map.set("name","Ace");
map.set("price","15 OMR");
map.set("shipping","5 OMR");
function search() {
    x = document.getElementById("search").value;
    x.toLowerCase();
    window.alert(map.get(x));
    
}
