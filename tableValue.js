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
      
    ace.urgent,
    ace.normal,
    
];
    
 


function addCart() {
    let addCart = document.getElementById('newElementInput').value;
    
}


function search() {
    let searchTerm = document.getElementById('searchInput').value;
    
}